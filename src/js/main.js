import '../scss/main.scss'
import initThemeToggle from './modules/SwitchTheme.js';
import DropdownFocus from './modules/DropdownFocus.js';

import * as bootstrap from 'bootstrap'

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  // Inicializar gerenciamento de foco do dropdown
  new DropdownFocus();

  // Inicializar sistema de mudança de tema
  initThemeToggle();
});
