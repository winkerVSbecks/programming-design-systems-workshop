import preloader from 'spectacle/lib/utils/preloader';

const images = {
  figma: require('assets/figma.gif'),
  airbnb: require('assets/airbnb-dls.png'),
};

preloader(images);

export default images;
