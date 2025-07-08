// src/js/modules/CardCarousel.js
export default class CardCarousel {
  constructor() {
    this.carousel = document.getElementById('cardsCarousel');
    this.wrapper = this.carousel?.querySelector('.cards-wrapper');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.indicatorsContainer = document.getElementById('carouselIndicators');

    this.currentIndex = 0;
    this.totalCards = this.wrapper?.children.length || 0;

    // Controle de scroll mais suave
    this.scrollAccumulator = 0;
    this.scrollThreshold = 50; // Menor threshold para mais responsividade
    this.scrollTimeout = null;

    // Novas variáveis para scroll fluido
    this.scrollStep = 1; // Quantos cards mover por vez no scroll
    this.isScrolling = false;

    this.init();
  }

  init() {
    if (!this.carousel) return;

    this.calculateDimensions();
    this.generateIndicators();
    this.updateButtons();
    this.addEventListeners();
    this.handleResize();
  }

  calculateDimensions() {
    if (!this.wrapper || this.totalCards === 0) return;

    // Aguardar um frame para garantir que o layout foi calculado
    requestAnimationFrame(() => {
      const firstCard = this.wrapper.children[0];
      if (!firstCard) return;

      const cardStyle = window.getComputedStyle(firstCard);
      const wrapperStyle = window.getComputedStyle(this.wrapper);

      this.cardWidth = firstCard.offsetWidth;
      this.gap = parseInt(wrapperStyle.gap) || 20;
      this.cardWithGap = this.cardWidth + this.gap;

      // Calcular quantos cards cabem na tela
      const containerWidth = this.carousel.offsetWidth;
      this.visibleCards = Math.floor(containerWidth / this.cardWithGap);
      this.visibleCards = Math.max(1, Math.min(this.visibleCards, this.totalCards));

      // Calcular máximo índice mais precisamente
      this.maxIndex = Math.max(0, this.totalCards - this.visibleCards);

      // Ajustar step de scroll baseado na resolução
      if (window.innerWidth >= 1400) {
        this.scrollStep = 2; // Desktop grande: 2 cards por vez
      } else if (window.innerWidth >= 1024) {
        this.scrollStep = 1; // Desktop médio: 1 card por vez
      } else {
        this.scrollStep = 1; // Mobile/tablet: 1 card por vez
      }

      // Calcular páginas para indicadores
      this.totalPages = Math.ceil(this.totalCards / this.visibleCards);

      // Atualizar indicadores se necessário
      if (this.indicatorsContainer) {
        this.generateIndicators();
        this.updateCarousel();
      }
    });
  }

  generateIndicators() {
    if (!this.indicatorsContainer) return;

    this.indicatorsContainer.innerHTML = '';

    for (let i = 0; i < this.totalPages; i++) {
      const indicator = document.createElement('span');
      indicator.classList.add('indicator');
      if (i === 0) indicator.classList.add('active');
      indicator.setAttribute('data-page', i);
      this.indicatorsContainer.appendChild(indicator);
    }
  }

  addEventListeners() {
    // Botões de navegação
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Indicadores (delegação de eventos)
    this.indicatorsContainer?.addEventListener('click', (e) => {
      if (e.target.classList.contains('indicator')) {
        const pageIndex = parseInt(e.target.getAttribute('data-page'));
        this.goToPage(pageIndex);
      }
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Resize
    window.addEventListener('resize', () => this.handleResize());

    // Touch/Swipe em mobile
    this.addTouchEvents();

    // Scroll do mouse melhorado
    this.addMouseWheelEvents();
  }

  addMouseWheelEvents() {
    // Só ativar scroll do mouse em desktop
    if (window.innerWidth >= 768) {
      this.carousel?.addEventListener('wheel', (e) => {
        e.preventDefault();

        // Evitar scroll muito rápido
        if (this.isScrolling) return;

        this.scrollAccumulator += e.deltaY;

        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }

        // Threshold menor para mais responsividade
        if (Math.abs(this.scrollAccumulator) >= this.scrollThreshold) {
          this.isScrolling = true;

          if (this.scrollAccumulator > 0) {
            // Scroll para baixo = próximo
            this.smoothNext();
          } else {
            // Scroll para cima = anterior
            this.smoothPrev();
          }

          this.scrollAccumulator = 0;

          // Liberar scroll após animação
          setTimeout(() => {
            this.isScrolling = false;
          }, 300);
        }

        // Reset do acumulador após 300ms de inatividade
        this.scrollTimeout = setTimeout(() => {
          this.scrollAccumulator = 0;
        }, 300);

      }, { passive: false });
    }
  }

  smoothPrev() {
    const newIndex = Math.max(0, this.currentIndex - this.scrollStep);
    this.currentIndex = newIndex;
    this.updateCarousel();
  }

  smoothNext() {
    const newIndex = Math.min(this.maxIndex, this.currentIndex + this.scrollStep);
    this.currentIndex = newIndex;
    this.updateCarousel();
  }

  prev() {
    // Navegação por botão: mais agressiva
    const step = Math.max(1, this.visibleCards - 1);
    const newIndex = Math.max(0, this.currentIndex - step);
    this.currentIndex = newIndex;
    this.updateCarousel();
  }

  next() {
    // Navegação por botão: mais agressiva
    const step = Math.max(1, this.visibleCards - 1);
    const newIndex = Math.min(this.maxIndex, this.currentIndex + step);
    this.currentIndex = newIndex;
    this.updateCarousel();
  }

  goToPage(pageIndex) {
    // Navegar para uma página específica
    const targetIndex = pageIndex * this.visibleCards;
    this.currentIndex = Math.min(targetIndex, this.maxIndex);
    this.updateCarousel();
  }

  updateCarousel() {
    if (!this.cardWithGap) return;

    // Calcular deslocamento em pixels
    const translateX = -this.currentIndex * this.cardWithGap;
    this.wrapper.style.transform = `translateX(${translateX}px)`;

    this.updateButtons();
    this.updateIndicators();
  }

  updateButtons() {
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
  }

  updateIndicators() {
    const indicators = this.indicatorsContainer?.querySelectorAll('.indicator');
    const currentPage = Math.floor(this.currentIndex / this.visibleCards);

    indicators?.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentPage);
    });
  }

  handleResize() {
    // Debounce do resize
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      // Recalcular dimensões
      this.calculateDimensions();

      // Ajustar posição atual para não ultrapassar limites
      this.currentIndex = Math.min(this.currentIndex, this.maxIndex);

      // Reset do acumulador na mudança de tamanho
      this.scrollAccumulator = 0;

      // Reconfigurar eventos de scroll
      this.removeMouseWheelEvents();
      this.addMouseWheelEvents();
    }, 250);
  }

  removeMouseWheelEvents() {
    // Limpar eventos de scroll existentes
    this.carousel?.removeEventListener('wheel', this.wheelHandler);
  }

  addTouchEvents() {
    let startX = 0;
    let endX = 0;

    this.carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    this.carousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.smoothNext();
        } else {
          this.smoothPrev();
        }
      }
    });
  }
}