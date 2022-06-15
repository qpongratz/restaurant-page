import {createElement, createList} from './elementCreator'

export default function homeTab(content) {
  content.appendChild(createElement('h1', 'Midwest Marty\'s Fully Loaded Nacho Emporium'));
  content.appendChild(createElement('h2', 'Welcome!'))
  content.appendChild(createElement('p', 'Come on down to the Fully Loaded Nacho Emporium. The only family-friendly, fully-loaded, nacho establishment in the greater metropolitan area that doesn\'t require you to be Fully Loaded'));
  content.appendChild(createElement('h2', 'Rules:'));

  const rules = [
    'Have Fun',
    'If you order nachos to share, one person can\'t just eat all of the fully loaded nachos. Basically, if two people order nachos to share, one person can\'t take the ones with meat and stuff.'
  ];

  content.appendChild(createList(rules));

}