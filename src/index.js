import './style.scss';
import homeTab from './homeTab';
import menuTab from './menuTab';
import navBar from './navBar';

const content = document.getElementById('content');
content.classList.add('card');

class Tabs {
  home(){
    this.clear();
    homeTab(content);
  }
  menu(){
    this.clear();
    menuTab(content);
  }
  about(){
    this.clear();
    aboutTab(content);
  }
  contact(){
    this.clear();
    contactTab(content);
  }
  clear(){
    while (content.firstChild) {
      content.firstChild.remove();
    };
  }
}

navBar();
homeTab(content);

const navigation = document.querySelectorAll('nav>button');

let tab = new Tabs();

navigation.forEach (button => {
  button.addEventListener('click', () => {
    tab[button.id]();
  });
});
