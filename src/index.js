const path = require('path');

module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {smartlook} = themeConfig || {};

  if (!smartlook) {
    throw new Error(
      `You need to specify the 'smartlook' object in 'themeConfig' with the 'projectKey' field in it to use docusaurus-plugin-smartlook`,
    );
  }

  const {projectKey} = smartlook;

  if (!projectKey) {
    throw new Error(
      'You specified the `smartlook` object in `themeConfig` but the `projectKey` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-smartlook',

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', '${projectKey}');
            `,
          },
        ],
      };
    },
  };
};