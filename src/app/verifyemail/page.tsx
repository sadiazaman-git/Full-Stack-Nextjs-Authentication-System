"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.reponse.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-8 py-10 mx-auto h-screen lg:py-0 space-y-5">
        <h1 className="text-4xl">Verify Email</h1>
        <h2 className="p-2 bg-slate-300 text-black px-3 py-2 rounded-md">
          {token ? `${token}` : "no token"}
        </h2>

        {verified && (
          <div>
            <h2 className="text-2xl">Email Verified</h2>
            <Link
              href="/login"
              className="font-medium text-teal-600 hover:underline"
            >
              Login!
            </Link>
          </div>
        )}
        {error && (
          <div>
            <h2 className="text-xl bg-red-500 text-white px-3 py-2 rounded-md">
              Error: Verification Failed.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
