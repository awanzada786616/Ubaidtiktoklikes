// api/order.js
export default async function handler(req, res) {
  const { service, link, quantity } = req.body;
  const API_KEY = process.env.SMM_API_KEY; // Vercel Settings ma add karain

  const formData = new URLSearchParams();
  formData.append('key', API_KEY);
  formData.append('action', 'add');
  formData.append('service', service);
  formData.append('link', link);
  formData.append('quantity', quantity);

  try {
    const response = await fetch('https://shadowsmmpanel.com/api/v2', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
