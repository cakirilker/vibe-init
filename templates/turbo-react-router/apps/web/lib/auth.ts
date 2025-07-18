import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./db/schema";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.BETTER_AUTH_URL!, "http://localhost:5173"],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    password: {
      hash: async (password) => {
        // Use a faster hashing algorithm for Workers
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest("SHA-256", data);
        return Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      },
      verify: async ({ hash, password }) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const computedHash = await crypto.subtle.digest("SHA-256", data);
        const computedHashString = Array.from(new Uint8Array(computedHash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        return computedHashString === hash;
      },
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
    },
    defaultCookieAttributes: {
      sameSite: "lax",
      secure: process.env.BETTER_AUTH_URL!.startsWith("https://"),
      httpOnly: true,
      path: "/",
      domain: process.env.BETTER_AUTH_URL!.startsWith("https://")
        ? ".Awesome Website.com"
        : undefined,
    },
  },
});
