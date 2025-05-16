'use client';

import Container from "@/components/Container";
import { useAuth } from "@/hooks/auth";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";


export default function VerifyEmailPage() {
  const [status, setStatus] = useState<string | null>(null);

  const { resendEmailVerification, logout } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard',
})


  return (
    <Container className="mt-100 md:mt-150">
      <div className="max-w-600 mx-auto">
        <p className="mb-10 text-[14px] leading-18 text-mirage">
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn't receive the email, we will gladly send you another.
        </p>
        {status === "verification-link-sent" && (
          <div className="mb-4 font-medium text-sm">
            A new verification link has been sent to the email address you
            provided during registration.
          </div>
        )}
        <div className="mt-10 flex flex-wrap justify-between gap-10">
          <Button
            onClick={() => resendEmailVerification({ setStatus })}
            className="min-h-44 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Resend Verification Email
          </Button>
          <Button
            onClick={logout}
            className="min-h-44 text-[14px] leading-20 font-semibold bg-shakespeare hover:bg-shakespeare-700 text-white"
          >
            Logout
          </Button>
        </div>
      </div>
    </Container>
  );
}
