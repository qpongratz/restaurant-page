import {createElement, createImage, createList} from './elementCreator'
import Broiled from './images/broiled.jpeg';
import Classic from './images/classic.jpg';
import Deconstructed from './images/deconstructed.jpg';
import RiceBowl from './images/rice-bowl.jpg';

export default function homeTab(content) {
  content.appendChild(createImage(Broiled));
}