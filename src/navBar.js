import {createElement, createList} from './elementCreator'

export default function navBar() {
  const navBar = document.getElementById('nav-bar');
  console.log(navBar)
  const nav = createElement('nav');
  nav.appendChild(createElement('button', 'Home', 'nacho-button'));
  nav.appendChild(createElement('button', 'Menu', 'nacho-button'));
  nav.appendChild(createElement('button', 'About', 'nacho-button'));
  nav.appendChild(createElement('button', 'Contact', 'nacho-button'));
  navBar.appendChild(nav);
}

