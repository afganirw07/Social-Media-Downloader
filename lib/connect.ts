import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";

export async function Connect(path: string, options: RequestInit = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    let session;
    if (typeof window !== "undefined") {
        session = await getSession();
    } else {
        session = await getServerSession(authOptions);
    }

    const token = session?.user.accessToken || "";
    // console.log("====TOKEN====", token);

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
