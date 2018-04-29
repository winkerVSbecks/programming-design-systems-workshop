import preloader from 'spectacle/lib/utils/preloader';

const images = {
  cssWorkflow: require('assets/css-workflow.png'),
  figma: require('assets/figma.gif'),
  airbnb: require('assets/airbnb-dls.png'),
};

preloader(images);

export default images;
