import footerTemplate from '../../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');

/* if (footerContainer) {
  footerContainer.innerHTML = footerTemplate();
}
 */


let frontEndLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: 'https://www.youtube.com/watch?v=SBB1YtwODT0',
    label: 'Road Map',
  },
];

let bootstrapLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: 'https://getbootstrap.com/docs/4.4/about/overview/',
    label: 'About Bootstrap',
  },
];

let reactLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: 'https://reactjs.org/',
    label: 'About React',
  },
];


frontEndLinks = frontEndLinks.map((linkItem) => {
  const item = linkItem;
  item.isActive = (window.location.pathname === linkItem.url);
  return item;
});

reactLinks = reactLinks.map((linkItem) => {
  const item = linkItem;
  item.isActive = (window.location.pathname === linkItem.url);
  return item;
});

bootstrapLinks = bootstrapLinks.map((linkItem) => {
  const item = linkItem;
  item.isActive = (window.location.pathname === linkItem.url);
  return item;
});


if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ frontEndLinks, reactLinks, bootstrapLinks });
}
