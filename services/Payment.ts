import { ClientConnect } from "@/lib/client-connect";

const Connect = ClientConnect;

export const createPayment = async (data: {amount: number, description: string}) => {
try {
    const res = await Connect("/api/payment/create", {
        method: "POST",
        body: JSON.stringify(data), 
    });
    return res; 
    
} catch (error) {
    console.error(error);
    throw error;
}
}

export const webhookPayment = async (data: {external_id: number, status: string}) => {
    try {
        const res = await Connect("/api/payment/webhook", {
            method: "POST",
            body: JSON.stringify(data),
        })
        return res;
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}