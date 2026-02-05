export default function handler(req, res) {
    // Get the host to determine which domain
    const host = req.headers.host;

    // Map hosts to domains
    const domainMap = {
        'data-blast.com': 'data-blast.com',
        'www.data-blast.com': 'data-blast.com',
        'xr-gaming.com': 'xr-gaming.com',
        'www.xr-gaming.com': 'xr-gaming.com',
        'vr-live.com': 'vr-live.com',
        'www.vr-live.com': 'vr-live.com',
        'hair-guru.com': 'hair-guru.com',
        'www.hair-guru.com': 'hair-guru.com',
        'gamer-guide.com': 'gamer-guide.com',
        'www.gamer-guide.com': 'gamer-guide.com',
        'xr-studios.com': 'xr-studios.com',
        'www.xr-studios.com': 'xr-studios.com'
    };

    const domain = domainMap[host] || 'data-blast.com';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${domain}/</loc>
    <lastmod>2026-02-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.status(200).send(sitemap);
}
