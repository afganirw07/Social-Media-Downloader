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
  FieldLabel,
} from "@/components/ui/field"

import { InputOtp } from "@heroui/input-otp"

export default function OtpPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [otp, setOtp] = useState<string>("")

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("OTP Entered:", otp)
    
    alert("OTP Verified")
  }

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
                  <FieldLabel>OTP Code</FieldLabel>

                  <InputOtp
                    length={6}
                    value={otp}
                    onValueChange={(value: string) => setOtp(value)}
                    className="items-center h-12 w-12 text-lg rounded-md gap-2"
                  />

                  

                  <FieldDescription className="text-center">
                    Code expires in 02:00
                  </FieldDescription>
                </Field>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={otp.length !== 6}
                >
                  Verify Code
                </Button>

                <FieldDescription className="text-center">
                  Didn’t receive the code?{" "}
                  <button
                    type="button"
                    className="font-semibold text-black hover:underline"
                    onClick={() => alert("Resend OTP")}
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
