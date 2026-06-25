import { json } from "@remix-run/node";

export const action = async ({ request }) => {
    const data = await request.json();

    console.log("Webhook received:", data);

    if (data.available > 0) {
        console.log("Back in stock!");
    }

    return json({ success: true });
};