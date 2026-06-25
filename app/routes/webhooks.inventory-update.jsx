import { json } from "@remix-run/node";

export const action = async ({ request }) => {
    try {
        // ✅ raw text lo pehle
        const rawBody = await request.text();
        console.log("Raw body:", rawBody);

        // ✅ safe parse
        const data = JSON.parse(rawBody);
        console.log("Parsed:", data);

        // ✅ simple check
        if (data.available > 0) {
            console.log("Back in stock!");
        }

        return json({ ok: true });
    } catch (error) {
        console.error("Webhook error:", error);

        return json(
            { error: "Webhook failed" },
            { status: 200 }
        );
    }
};