const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxgZDpEyRko0Y3_q6_tN0S431E0bFtOo1RLvxRiTXnMSdp2kfnQ0P4AG-ariMBT0LLU/exec";

const SHARED_SECRET = process.env.NOOR_SHARED_SECRET;

if (!SHARED_SECRET) {
  throw new Error("La clé secrète NOOR_SHARED_SECRET est absente.");
}
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: SHARED_SECRET,
        order: req.body,
      }),
    });

    const result = await response.json();

    return res.status(response.ok ? 200 : 500).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Impossible d'enregistrer la commande.",
    });
  }
}