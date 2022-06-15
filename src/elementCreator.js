const createElement = (tag, text = '', cssClass = false) => {
  const element = document.createElement(tag);
  element.innerText = text;
  if (cssClass) { element.classList.add(cssClass) }
  return element;
}

const createList = (listItems, ordered = false) => {
  const tag = (ordered) ? 'ol' : 'ul';
  const list = domElement(tag);
  listItems.forEach( element => {
    const listItem = domElement('li', element);
    list.appendChild(listItem);
  });
  return list;
}

const createImage = (name, cssClass = false) => {
  let image = new Image();
  image.src = name;
  if (cssClass) { image.classList.add(cssClass) }
  return image;
}

export { createElement, createList, createImage};