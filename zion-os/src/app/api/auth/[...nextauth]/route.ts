import NextAuth from &quot;next-auth&quot;;
import CredentialsProvider from &quot;next-auth/providers/credentials&quot;;
import { PrismaAdapter } from &quot;@auth/prisma-adapter&quot;;
import { prisma } from &quot;@/lib/prisma&quot;;
import bcrypt from &quot;bcryptjs&quot;;

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: &quot;credentials&quot;,
      credentials: {
        email: { label: &quot;Email&quot;, type: &quot;email&quot; },
        password: { label: &quot;Password&quot;, type: &quot;password&quot; }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role};
      }
    })
  ],
  session: {
    strategy: &quot;jwt&quot;},
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role;
      }
      return session;
    }},
  pages: {
    signIn: &quot;/auth/signin&quot;,
    signUp: &quot;/auth/signup&quot;}});

export { handler as GET, handler as POST };