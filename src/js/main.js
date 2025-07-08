import '../scss/main.scss'
import initThemeToggle from './modules/SwitchTheme.js';
import DropdownFocus from './modules/DropdownFocus.js';
import SidebarToggle from './modules/SidebarToggle.js';
import CardCarousel from './modules/CardCarousel.js';
import * as bootstrap from 'bootstrap'

// ✅ ÚNICA inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  // Inicializar gerenciamento de foco do dropdown
  new DropdownFocus();

  // Inicializar sistema de mudança de tema
  initThemeToggle();

  // Inicializar sidebar toggle
  new SidebarToggle();

  // Inicializar carrossel de cards
  new CardCarousel();

  console.log('✅ Todos os módulos inicializados');
});