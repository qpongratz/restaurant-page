export default function homeTab() {
  const content = document.getElementById('content');
  content.classList.add('card');

  // Move this to its own thing later. Needs to be reused in other tabs
  const domElement = (tag, text, cssClass = false) => {
    const element = document.createElement(tag);
    element.innerText = text;
    if (cssClass) { element.classList.add(cssClass) }
    return element;
  }


  content.appendChild(domElement('p', 'Added by function'))

}