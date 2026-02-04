export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Get the domain from query parameter
    const { domain } = req.query;

    if (!domain) {
        return res.status(400).json({ error: 'Domain parameter required' });
    }

    try {
        // Fetch from CounterAPI.dev
        const response = await fetch(`https://api.counterapi.dev/v1/${domain}/visits/up`);
        const data = await response.json();

        // Return just the count
        res.status(200).json({ count: data.count });
    } catch (error) {
        console.error('Counter API error:', error);
        res.status(500).json({ error: 'Failed to fetch counter' });
    }
}
