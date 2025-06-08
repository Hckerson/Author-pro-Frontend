import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      locale: string;
      verified: boolean;
      provider: string;
    } & DefaultSession["user"];
    provider: string;
  }
  interface User {
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    locale: string | null;
  }
}