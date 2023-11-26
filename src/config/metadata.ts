import packageJson from '~/../package.json';

const cleanUrl = '127.0.0.1';

const metadata = {
  website: {
    name: 'Drawing App',
    slogan: 'Plugin for drawing',
    description: 'A drawing web application, built with TypeScript, React, and Next.js.',
    cleanUrl,
    email: `martin@coreict.co.ke`,
    url: `https://${cleanUrl}`,
    manifest: `https://${cleanUrl}/manifest.json`,
    thumbnail: `https://${cleanUrl}/images/thumbnail.jpg`,
    locale: 'en',
    themeColor: '#FFFFFF',
    version: packageJson.version,
  },
  social: {
    twitter: 'CoreICTConsultancy',
  },
  links: {
    github: 'https://github.com/MartinDeMundia',
  },
  services: {
    googleAnalyticsMeasurementId: '',
  },
};

export default metadata;
