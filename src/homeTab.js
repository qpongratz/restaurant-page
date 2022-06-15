import Enjoyment from './images/enjoyment.jpg';
import Nacho from './images/nacho-transparent.png';

export default function homeTab() {
  const content = document.getElementById('content');
  content.classList.add('card');

  // Move this to its own thing later. Needs to be reused in other tabs
  const textElement = (tag, text, cssClass = false) => {
    const element = document.createElement(tag);
    element.innerText = text;
    if (cssClass) { element.classList.add(cssClass) }
    return element;
  }
  const addTextToContent = (tag, text, cssClass = false) => {
    content.appendChild(textElement(tag, text, cssClass));
  }

  const addImageToContent = (name, cssClass = false) => {
    let image = new Image();
    image.src = name;
    if (cssClass) { image.classList.add(cssClass) }
    content.appendChild(image);
  }
  addTextToContent('button', 'Press me', 'nacho-button');

  addTextToContent('h1', 'Fully Loaded Nacho Emporium', 'restaurant_name')
  addTextToContent('p', 'Come on down to the Fully Loaded Nacho Emporium. The only family-friendly, fully-loaded, nacho establishment in the greater metropolitan area that doesn\'t require you to be Fully Loaded')
  addTextToContent('p', 'Added by function');
  addImageToContent(Enjoyment);
  addImageToContent(Nacho);

}