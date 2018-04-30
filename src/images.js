import preloader from 'spectacle/lib/utils/preloader';

const images = {
  airbnb: require('assets/airbnb-dls.png'),
  figma: require('assets/figma.gif'),
  cssWorkflow: require('assets/css-workflow.png'),
  tachyonsDesignSystem: require('assets/tachyons-design-system.gif'),
  tachyonsWorkflow: require('assets/tachyons-workflow.png'),
  formUi: require('assets/form-ui.png'),
  formUiMargin: require('assets/form-ui-margin.png'),
  marqueeDebug: require('assets/marquee-debug.png'),
  marquee: require('assets/marquee.png'),
  marqueeComponents: require('assets/marquee-components.png'),
};

preloader(images);

export default images;
