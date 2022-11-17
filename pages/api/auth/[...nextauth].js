import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  SECRET: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin'
  }
}
export default NextAuth(authOptions)