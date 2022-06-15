import {createElement, createList} from './elementCreator'

export default function navBar() {
  const navBar = document.getElementById('nav-bar');
  console.log(navBar)
  const nav = createElement('nav');
  nav.appendChild(createElement('button', 'Home', 'home', 'nacho-button'));
  nav.appendChild(createElement('button', 'Menu', 'menu', 'nacho-button'));
  nav.appendChild(createElement('button', 'About', 'about', 'nacho-button'));
  nav.appendChild(createElement('button', 'Contact', 'contact', 'nacho-button'));
  navBar.appendChild(nav);
}

