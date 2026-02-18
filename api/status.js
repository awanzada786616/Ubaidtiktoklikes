export default async function handler(req, res) {
    const { orderId } = req.query;
    const API_KEY = '47e3fd8ab22eb097fee4infosec1f4994d307570972e5d0';
    const API_URL = 'https://smmpakpanels.com/api/v2';

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&action=status&order=${orderId}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch status' });
    }
}
