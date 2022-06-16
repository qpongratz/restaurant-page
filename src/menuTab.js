import {createElement, createImage, createList} from './elementCreator'
import Broiled from './images/broiled.jpeg';
import Classic from './images/classic.jpg';
import Deconstructed from './images/deconstructed.jpg';
import RiceBowl from './images/rice-bowl.jpg';

class MenuItem {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

export default function homeTab(content) {
  const menuItems = [];
  menuItems.push(new MenuItem('The Classic Fully-Loaded Nachos', Classic, 'The Nachos your grandparents used to enjoy. We have been serving this recipe for nigh on 80 years now, and see no reason to mess with perfection.'));
  menuItems.push(new MenuItem('The Fully-Loaded Broiler', Broiled, 'A simple twist on the classic taste. Need your nachos and fixins to be a little more done, you can\'t go wrong with a good broil.'));
  menuItems.push(new MenuItem('The Fully-Loaded Nacho Bowl', RiceBowl, 'Sometimes you want the taste of the nachos, but without the investment of a full platter. We have you covered with the bowl. A great way to get your nacho fix on the go.'));
  menuItems.push(new MenuItem('The Fully-Unloaded Nachos', Deconstructed, 'For those with a little more gumption than hunger, we offer this oppurtunity to construct your Fully-Loaded experience. Come in and enjoy a buffet bar of fixins where you can create the nachos that used to only exist in your dreams.'));

  content.appendChild(createElement('h1', 'Our Menu'))

  menuItems.forEach( (element) => {
    const container = createElement('div', '', false, 'menu_item');
    container.appendChild(createImage(element.image, 'menu_item_image'));
    container.appendChild(createElement('h2', element.name, element.name, 'menu_item_name'));
    container.appendChild(createElement('p', element.description, false, 'menu_item_description'));
    content.appendChild(container);
  });
};