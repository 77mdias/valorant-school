// src/js/modules/SidebarToggle.js
export default class SidebarToggle {
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.overlay = document.getElementById('sidebarOverlay');
    this.toggleBtn = document.getElementById('sidebarToggle');
    this.closeBtn = document.getElementById('sidebarClose');
    this.body = document.body;

    this.init();
  }

  init() {
    // Toggle ao clicar no botão hambúrguer
    this.toggleBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });

    // Fechar ao clicar no X
    this.closeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.close();

      // Feedback visual
      this.closeBtn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.closeBtn.style.transform = 'scale(1)';
      }, 150);
    });

    // Fechar ao clicar no overlay (se existir)
    this.overlay?.addEventListener('click', () => {
      this.close();
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    // Debug log
    console.log('✅ SidebarToggle inicializado', {
      sidebar: !!this.sidebar,
      closeBtn: !!this.closeBtn,
      toggleBtn: !!this.toggleBtn
    });
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.sidebar?.classList.add('active');
    this.overlay?.classList.add('active');
    this.toggleBtn?.classList.add('active');
    this.body.classList.add('sidebar-open');
  }

  close() {
    this.sidebar?.classList.remove('active');
    this.overlay?.classList.remove('active');
    this.toggleBtn?.classList.remove('active');
    this.body.classList.remove('sidebar-open');
  }

  isOpen() {
    return this.sidebar?.classList.contains('active') || false;
  }
}