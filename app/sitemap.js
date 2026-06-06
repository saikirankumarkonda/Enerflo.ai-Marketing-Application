const siteUrl = 'https://enerflo-ai.co.uk';

export default function sitemap() {
  const routes = ['', '/features', '/use-cases', '/pricing', '/about', '/help', '/book-demo', '/privacy', '/terms', '/gdpr'];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
