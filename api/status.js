// api/status.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { orderId } = req.body;
    const API_KEY = process.env.SMM_API_KEY; // Vercel Settings se ayega
    const API_URL = "https://shadowsmmpanel.com/api/v2";

    const params = new URLSearchParams();
    params.append('key', API_KEY);
    params.append('action', 'status');
    params.append('order', orderId);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params
        });

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: 'Connection failed' });
    }
}
