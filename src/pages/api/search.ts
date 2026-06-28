// src\pages\api\search.ts

import { getKobashiNews } from "../../library/micro";

export const GET = async ({ url }: { url: URL }) => {
    const q = url.searchParams.get("q");

    const data = await getKobashiNews({
        fields: ["id", "title"],
        q: q || ""
    });

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
    });
};