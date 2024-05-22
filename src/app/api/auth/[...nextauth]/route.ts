import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../../../lib/prisma'
import { comparePassword } from '@/lib/utils'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email'
        },
        password: {
          label: 'password',
          type: 'password'
        }
      },
      async authorize(credentials: { email: string, password: string } | undefined, req) {
        const user = await prisma.company.findFirst({
          where: {
            email: credentials?.email
          }
        })

        if (!user) {
          return null
        }

        const isMatch = await comparePassword(credentials?.password!!, user.password)

        if (isMatch) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signIn',
    newUser: '/auth/signUp'
  },
  callbacks: {
    jwt({token, account, user}) {
      if (account) {
        token.id = user.id
      }

      return token;
    },
    async session({session, token, user}: {session: any, token: any, user: any}) {
      (session.user.id as string) = token.id as string
    
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}