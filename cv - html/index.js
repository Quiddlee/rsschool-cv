'use strict';

const themeSwitchCheckbox = document.getElementById('theme-switch');
const navigationList = document.querySelector('.navigation__list');
const navButton = document.querySelector('.navigation__btn');
const currTheme = localStorage.getItem('theme');
themeSwitchCheckbox.checked = currTheme === 'dark';

function handleThemeSwitchStateSave(e) {
  const themeToggler = e.target;
  const isThemeToggled = themeToggler.checked;

  localStorage.setItem('theme', isThemeToggled ? 'dark' : 'light');
}

function handleCloseNavOnAnchorClick(e) {
  const element = e.target;
  const isAnchorLink = element?.classList.contains('navigation__link');

  if (isAnchorLink) navButton.click();
}

themeSwitchCheckbox.addEventListener('input', handleThemeSwitchStateSave);
navigationList.addEventListener('click', handleCloseNavOnAnchorClick);
