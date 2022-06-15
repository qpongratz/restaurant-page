import {createElement, createList} from './elementCreator'

export default function header() {
  const header = createElement('nav');
  header.appendChild(createElement('button', 'Press me', 'nacho-button'));
  document.body.appendChild(header);
}

