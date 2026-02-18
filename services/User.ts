import { Connect } from "@/lib/connect";

// register
export const UserRegister = async (data: { email: string; username: string; password: string }) => {
    try {
        const res = await Connect("/api/user", {
            method: "POST",
            body: JSON.stringify(data),
        });
        return res;
        console.log(res);
    } catch (error) {
        console.error(error);
        throw error;
        console.log(error);
    }
}

// login
export const UserLogin = async (data: { email: string; password: string }) => {
    try {
        const res = await Connect("/api/login", {
            method: "POST",
            body: JSON.stringify(data),
        });
        return res;
        console.log(res);
    } catch (error) {
        console.error(error);
        throw error;
        console.log(error);
    }
}