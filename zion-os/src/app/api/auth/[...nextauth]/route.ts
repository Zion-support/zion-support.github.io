<<<<<<< HEAD
 import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

=======
import NextAuth from "next-auth",
import CredentialsProvider from "next-auth/providers/credentials",
import { PrismaAdapter } from "@auth/prisma-adapter",
import { prisma } from "@/lib/prisma",
import bcrypt from "bcryptjs",
>>>>>>> pr-11992
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

<<<<<<< HEAD
        // Mock user for now - replace with actual database lookup
        const user = {
          id: '1',
          email: credentials.email,
          password: '$2a$10$example.hash' // This would be from database
        };
=======
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        }),

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        ),
>>>>>>> pr-11992

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
<<<<<<< HEAD
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
=======
          name: user.name,
          role: user.role}
      }
    })
  ],
  session: {
    strategy: "jwt"},
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!,
        session.user.role = token.role
      }
      return session
    }},
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup"}}),

export { handler as GET, handler as POST },
>>>>>>> pr-11992
