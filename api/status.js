export default async function handler(req, res) {
    const { orderId } = req.query;
    const API_KEY = 'eca1d82bc97b56839285darknetac4f391e5fee7c66ec34';
    const API_URL = 'https://smmpakpanels.com/api/v2';

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&action=status&order=${orderId}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch status' });
    }
}
