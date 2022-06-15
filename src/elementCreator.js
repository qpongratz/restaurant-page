const createElement = (tag, text = '', cssId = false, cssClass = false) => {
  const element = document.createElement(tag);
  element.innerText = text;
  if (cssId) { element.setAttribute('id', cssId) };
  if (cssClass) { element.classList.add(cssClass) };
  return element;
}

const createList = (listItems, ordered = false) => {
  const tag = (ordered) ? 'ol' : 'ul';
  const list = createElement(tag);
  listItems.forEach( element => {
    const listItem = createElement('li', element);
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