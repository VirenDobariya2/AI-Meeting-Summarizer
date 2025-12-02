// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import type { JWT } from "next-auth/jwt";
import type { User, Account, Session } from "next-auth";
import type { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, account }: { token: JWT; user?: User | undefined; account?: Account | null }) {
      // token will contain user info
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = session.user || {};
      // merge token data if needed
      return session;
    },
  },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
