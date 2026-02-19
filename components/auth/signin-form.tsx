"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Login from "@/types/Login"
import { toast } from "sonner"

export function SigninForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [data, setData] = useState<Login>({
        email: "",
        password: "",
    })
        ;
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,    
            })
            toast.success("Logged in successfully");
            setTimeout(() => {
                window.location.href = "/homepage";
            }, 2000);
            console.log(res);
            setIsLoading(false);
        } catch (error) {
            toast.error("Error logging in");
            console.error(error);
        }
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome Back</CardTitle>
                    <CardDescription>
                        Enter your email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center justify-between">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a href="#" className="text-xs text-gray-500 hover:text-black hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                            </Field>
                            <Field>
                                <Button type="submit" className="w-full">
                                    {isLoading ? "Loading..." : "Login"}
                                </Button>
                                <FieldDescription className="text-center mt-4">
                                    Don&apos;t have an account? <Link href="/signup" className="font-semibold text-black hover:underline">Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#" className="underline hover:text-black">Terms of Service</a>{" "}
                and <a href="#" className="underline hover:text-black">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
