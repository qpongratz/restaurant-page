import './style.scss';
import homeTab from './homeTab';
import menuTab from './menuTab';
import navBar from './navBar';

const content = document.getElementById('content');
content.classList.add('card');

navBar();

const navigation = document.querySelectorAll('nav>button');
console.log(navigation);
menuTab(content);
