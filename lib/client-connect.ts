import { getSession } from "next-auth/react";

export async function ClientConnect(path: string, options: RequestInit = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const session = await getSession();
    const token = (session as any)?.user?.accessToken || "";

    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    const res = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers,
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Fetch error:", res.status, text);
        throw new Error(`HTTP ${res.status}: ${text}`);
    }

    return res.json();
}
