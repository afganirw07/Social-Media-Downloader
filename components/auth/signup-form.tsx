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
import { Input } from "@/components/ui/input"
import RegisterUser from "@/types/RegisterUser"
import { useState } from "react"
import { UserRegister } from "@/services/User"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [data, setData] = useState<RegisterUser>({
        email: "",
        username: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await UserRegister(data);
            toast.success("Account created successfully");
            setTimeout(() => {
                router.push(`/otp?email=${data.email}`);
            }, 2000);
            console.log(res);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            toast.error("Error creating account");
        }
    }



    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Create your account</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Username</FieldLabel>
                                <Input id="username" type="text" required value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" type="password" required value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating..." : "Create Account"}
                                </Button>
                                <FieldDescription className="text-center mt-4">
                                    Already have an account? <Link href="/signin" className="font-semibold text-black hover:underline">Sign in</Link>
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
