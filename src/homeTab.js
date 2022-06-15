import Enjoyment from './images/enjoyment.jpg';

export default function homeTab() {
  const content = document.getElementById('content');
  content.classList.add('card');

  // Move this to its own thing later. Needs to be reused in other tabs
  const domElement = (tag, text = '', cssClass = false) => {
    const element = document.createElement(tag);
    element.innerText = text;
    if (cssClass) { element.classList.add(cssClass) }
    return element;
  }

  const createList = (ordered = false, listItems) => {
    const tag = (ordered) ? 'ol' : 'ul';
    const list = domElement(tag);
    listItems.forEach( element => {
      const listItem = domElement('li', element);
      list.appendChild(listItem);
    });
    return list;
  }

  const addImageToContent = (name, cssClass = false) => {
    let image = new Image();
    image.src = name;
    if (cssClass) { image.classList.add(cssClass) }
    content.appendChild(image);
  }
  content.appendChild(domElement('button', 'Press me', 'nacho-button'));

  content.appendChild(domElement('div', '', 'banner'))
  content.appendChild(domElement('h1', 'Fully Loaded Nacho Emporium', 'restaurant_name'));
  content.appendChild(domElement('h2', 'Welcome!'))
  content.appendChild(domElement('p', 'Come on down to the Fully Loaded Nacho Emporium. The only family-friendly, fully-loaded, nacho establishment in the greater metropolitan area that doesn\'t require you to be Fully Loaded'));
  content.appendChild(domElement('h2', 'Rules:'));

  const rules = [
    'Have Fun',
    'If you get nachos to share...'
  ];

  content.appendChild(createList(false, rules));

}