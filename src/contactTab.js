import {createElement, createList} from './elementCreator'

export default function contactTab(content) {
  content.appendChild(createElement('h1', 'Get in Contact'));
  const contactMethods = [
    'Call: 405-555-1923',
    'Email: RealNachoEmporiumEmail@example.com'
  ]
  content.appendChild(createList(contactMethods, false));
  content.appendChild(createElement('p', 'Or just come visit us in person at the corner of street and avenue, downtown.'));
}