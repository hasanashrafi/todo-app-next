import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";



const authOptions = {
    session: { strategy: "jwt" },

    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { email, password } = credentials;

                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("Error in connect DB")
                }

                if (!email || !password) throw new Error("Enter Email and password")

                const user = await User.findOne({ email: email })
                if (!user) throw new Error("User doesn't Exist")

                const isValid = await verifyPassword(password, user.password)
                if (!isValid) throw new Error("Email or password incorrect")

                return { email }
            },
        }),
    ],

}


export default NextAuth(authOptions)
