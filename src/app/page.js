"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SignedOut>
        {/* Only shows when the user is not signed in */}
        <SignInButton>HELP PLEASE!!!</SignInButton>
      </SignedOut>
      <SignedIn>
        {/* Only shows when the user is signed in */}
        <UserButton />
      </SignedIn>
    </main>
  );
}
