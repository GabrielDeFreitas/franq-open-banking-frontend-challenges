export default async function handler(req, res) {
    const apiKey = process.env.VITE_HGBRASIL_API_KEY; // Certifique-se de que a variável está configurada na Vercel
    const response = await fetch(`https://api.hgbrasil.com/finance/quotations?key=${apiKey}`);

    if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch finance data' });
    }

    const data = await response.json();
    res.status(200).json(data);
}