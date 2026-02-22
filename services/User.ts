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

// Verify Email
export const VerifyEmailServices = async (data: { email: string; otp: string }) => {
    try {
        const res = await Connect("/api/verify-email", {
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

// resend otp
export const ResendOtpServices = async (data: { email: string }) => {
    try {
        const res = await Connect("/api/resend-otp", {
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

// get by user id
export const GetUserById = async (id: string) => {
    try {
        const res = await Connect(`/api/user/${id}`, {
            method: "GET",
        });
        return res;
        console.log(res);
    } catch (error) {
        console.error(error);
        throw error;
        console.log(error);
    }
}