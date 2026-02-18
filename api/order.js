export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { service, link, quantity } = req.body;
    const API_KEY = '47e3fd8ab22eb097fee4infosec1f4994d307570972e5d0';
    const API_URL = 'https://smmpakpanels.com/api/v2';

    try {
        const params = new URLSearchParams();
        params.append('key', API_KEY);
        params.append('action', 'add');
        params.append('service', service);
        params.append('link', link);
        params.append('quantity', quantity);

        const response = await fetch(API_URL, {
            method: 'POST',
            body: params
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Backend connection failed' });
    }
}
