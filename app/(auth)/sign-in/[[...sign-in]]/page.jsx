"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-12 py-16">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl w-full max-w-lg p-14">
      
        <h1 className="text-5xl font-extrabold text-blue-900 mb-2 text-center">
          Welcome to Callendric
        </h1>
        <p className="text-center text-blue-700 mb-10 text-lg">
          Sign in to manage your events, meetings, and availability
        </p>

        
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            variables: {
              colorPrimary: "#1E3A8A",
              colorPrimaryText: "#FFFFFF",
              colorText: "#1E40AF", 
              borderRadius: "12px",
              fontFamily: "Inter, sans-serif",
            },
            elements: {
              card: "bg-white shadow-lg p-8 rounded-2xl",
              headerTitle: "text-3xl font-bold text-blue-900 text-center mb-4",
              headerSubtitle: "text-center text-blue-700 mb-8",
              socialButtonsIconButton: "w-10 h-10 rounded-full",
            },
          }}
        />
      </div>
    </div>
  );
}
