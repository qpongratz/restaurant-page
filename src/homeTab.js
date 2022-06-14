export default function homeTab() {
  const content = document.getElementById('content');

  content.innerText = 'Hello, World!';
  content.classList.add('card');
}