
export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { fullName, email, message } = await request.json();

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !fullName.trim() ||
      !email.trim() ||
      !message.trim() ||
      fullName.length > 150 ||
      email.length > 254 ||
      message.length > 3000
    ) {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }

    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const recipient = process.env.WHATSAPP_RECIPIENT_NUMBER;
    const version = process.env.WHATSAPP_API_VERSION;

    if (!token || !phoneId || !recipient || !version) {
      console.error("WhatsApp configuration is missing");
      return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    const result = await fetch(
      `https://graph.facebook.com/${version}/${phoneId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: recipient,
          type: "template",
          template: {
            name: "new_website_enquiry",
            language: { code: "en" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: fullName.trim() },
                  { type: "text", text: email.trim() },
                  { type: "text", text: message.trim() },
                ],
              },
            ],
          },
        }),
      }
    );

    if (!result.ok) {
      const details = await result.text();
      console.error("WhatsApp API rejected request:", details);
      return Response.json({ error: "WhatsApp send failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("WhatsApp function error:", error);
    return Response.json({ error: "Unexpected server error" }, { status: 500 });
  }
};
