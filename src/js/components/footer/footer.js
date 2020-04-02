import footerTemplate from '../../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate();
}
