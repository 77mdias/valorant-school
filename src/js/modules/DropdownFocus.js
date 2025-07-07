import * as bootstrap from 'bootstrap';

/**
 * Módulo para gerenciar o foco do dropdown
 * Responsável por controlar estados de foco, blur e interações
 */
class DropdownFocus {
  constructor() {
    this.dropdownButton = null;
    this.dropdown = null;
    this.init();
  }

  /**
   * Inicializa o gerenciamento de foco do dropdown
   */
  init() {
    // Aguarda o DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupDropdown());
    } else {
      this.setupDropdown();
    }
  }

  /**
   * Configura os elementos do dropdown e seus eventos
   */
  setupDropdown() {
    this.dropdownButton = document.querySelector('.dropdownProfile');
    this.dropdown = document.querySelector('.dropdown');

    if (this.dropdownButton && this.dropdown) {
      this.attachEventListeners();
    }
  }

  /**
   * Anexa todos os event listeners necessários
   */
  attachEventListeners() {
    // Quando o dropdown é fechado pelo Bootstrap
    this.dropdown.addEventListener('hidden.bs.dropdown', () => {
      this.removeFocus();
    });

    // Quando clica fora do dropdown
    document.addEventListener('click', (event) => {
      if (!this.dropdown.contains(event.target)) {
        this.removeFocus();
      }
    });

    // Quando pressiona ESC
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.removeFocus();
        this.closeDropdown();
      }
    });

    // Listener para mudanças de tema
    window.addEventListener('themeChanged', () => {
      this.handleThemeChange();
    });
  }

  /**
   * Remove o foco do botão dropdown
   */
  removeFocus() {
    if (this.dropdownButton) {
      this.dropdownButton.blur();
    }
  }

  /**
   * Fecha o dropdown programaticamente
   */
  closeDropdown() {
    if (this.dropdown && this.dropdown.querySelector('.dropdown-menu.show')) {
      const bootstrapDropdown = bootstrap.Dropdown.getInstance(this.dropdownButton);
      if (bootstrapDropdown) {
        bootstrapDropdown.hide();
      }
    }
  }

  /**
   * Gerencia o foco quando o tema muda
   */
  handleThemeChange() {
    this.removeFocus();
    this.closeDropdown();
  }

  /**
   * Força reset completo do dropdown (usado durante mudanças de tema)
   */
  forceReset() {
    if (this.dropdownButton) {
      // Remove estilos inline que podem estar persistindo
      this.dropdownButton.style.cssText = '';
      this.removeFocus();

      // Reset de atributos Bootstrap
      if (this.dropdownButton.hasAttribute('aria-expanded')) {
        this.dropdownButton.setAttribute('aria-expanded', 'false');
      }

      // Remove classes do Bootstrap
      if (this.dropdown) {
        this.dropdown.classList.remove('show');
        const menu = this.dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      }
    }
  }

  /**
   * Método público para remover foco de todos os dropdowns da página
   */
  static removeAllFocus() {
    const allDropdownButtons = document.querySelectorAll('.dropdownProfile');
    allDropdownButtons.forEach(btn => {
      btn.blur();
      btn.style.cssText = '';

      if (btn.hasAttribute('aria-expanded')) {
        btn.setAttribute('aria-expanded', 'false');
      }

      const dropdown = btn.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.remove('show');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      }
    });
  }
}

export default DropdownFocus; 