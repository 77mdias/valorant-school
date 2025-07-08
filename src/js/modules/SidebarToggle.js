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
    this.toggleBtn?.addEventListener('click', () => {
      this.toggle();
    });

    // Fechar ao clicar no X
    this.closeBtn?.addEventListener('click', () => {
      this.close();
    });

    // Fechar ao clicar no overlay
    this.overlay?.addEventListener('click', () => {
      this.close();
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
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
    this.sidebar.classList.add('active');
    this.overlay.classList.add('active');
    this.toggleBtn.classList.add('active');
    this.body.classList.add('sidebar-open');
  }

  close() {
    this.sidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    this.toggleBtn.classList.remove('active');
    this.body.classList.remove('sidebar-open');
  }

  isOpen() {
    return this.sidebar.classList.contains('active');
  }
}