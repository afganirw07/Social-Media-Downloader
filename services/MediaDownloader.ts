import { ClientConnect } from "@/lib/client-connect";

const Connect = ClientConnect;


export const InstagramDownloader = async (data: { url: string, fileType: string, userId: string }) => {
    try {
        const res = await Connect("/api/instagram", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const media = res.data.data.videoUrl;
        return media;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const TikTokDownloader = async (data: { url: string, fileType: string, userId: string }) => {
    try {
        const res = await Connect("/api/tiktok", {
            method: "POST",
            body: JSON.stringify(data),
        });

        const media = res.data.result.video.downloadAddr[0];
        return media;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const FacebookDownloader = async (data: { url: string, fileType: string, userId: string }) => {
    try {
        const res = await Connect("/api/facebook", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const media = res?.media?.data?.videoUrl;   
        return media;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const TwitterDownloader = async (data: { url: string, fileType: string, userId: string }) => {
    try {
        const res = await Connect("/api/twitter", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const media = res.data.info.url[0];
        return media;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const YouTubeDownloader = async (data: { url: string, fileType: string, userId: string }) => {
    try {
        const res = await Connect("/api/youtube", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const media = res.data.data.download.video;
        return media;
    } catch (error) {
        console.error(error);
        throw error;
    }
}