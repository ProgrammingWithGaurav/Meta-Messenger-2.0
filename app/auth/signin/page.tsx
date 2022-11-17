"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInPage() {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col">
      <div>
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="https://links.papareact.com/161"
          alt="Meta Logo"
        />
      </div>

      <div>
        <button
          className=" bg-red-400 px-4 py-2 text-lg rounded text-white"
          onClick={() =>
            signIn("google", {
              callbackUrl: '/'})
          }
        >
          Sign in with GOOGLE
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
