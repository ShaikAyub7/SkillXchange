import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <main>
        <Navbar />
        <HomePage />
      </main>
    </ClerkProvider>
  );
}
