"use client"

import { useState } from "react"
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
} from "@/components/ui/field"

import { InputOtp } from "@heroui/input-otp"
import VerifyEmail from "@/types/VerifyEmail"
import { useSearchParams } from "next/navigation";
import { VerifyEmailServices, ResendOtpServices } from "@/services/User"
import { useRouter } from "next/navigation";


export default function OtpPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get("email") || "";
  const [data, setData] = useState<VerifyEmail>({
    email: emailFromQuery,
    otp: "",
  })
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();




  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await VerifyEmailServices(data);
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  const handleResend = async () => {
    try {
      setIsLoading(true);

      const res = await ResendOtpServices({
        email: data.email,
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    >
      <div className="flex w-full max-w-sm flex-col gap-6">

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Verify OTP</CardTitle>
            <CardDescription>
              Enter the 6-digit code sent to your email
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleVerify}>
              <FieldGroup className="flex flex-col items-center gap-6">

                <Field className="items-center">
                  <InputOtp
                    length={6}
                    className="items-center h-12 w-12 text-lg rounded-md gap-2"
                    value={data.otp}
                    onValueChange={(value) =>
                      setData({ ...data, otp: value })
                    }
                  />

                </Field>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>


                <FieldDescription className="text-center">
                  Didn’t receive the code?{" "}
                  <button
                    type="button"
                    className="font-semibold text-black hover:underline"
                    onClick={handleResend}
                  >
                    Resend
                  </button>

                </FieldDescription>

                <FieldDescription className="text-center">
                  Back to{" "}
                  <Link
                    href="/signin"
                    className="font-semibold text-black hover:underline"
                  >
                    Sign in
                  </Link>
                </FieldDescription>

              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <FieldDescription className="px-6 text-center">
          We’ve sent a verification code to your email address.
        </FieldDescription>

      </div>
    </div>
  )
}
