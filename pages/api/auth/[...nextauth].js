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
          await connectDB();
          console.log('Database connection established');
        } catch (error) {
          console.error('Error connecting to database:', error);
          throw new Error("Error in connecting to DB!");
        }

        if (!email || !password) {
          console.error('Invalid credentials');
          throw new Error("Invalid Data!");
        }

        const user = await User.findOne({ email: email });
        console.log('User   found:', user);

        if (!user) {
          console.error('User   not found');
          throw new Error("User   doesn't exist!");
        }

        const isValid = await verifyPassword(password, user.password);
        console.log('Password verification result:', isValid);

        if (!isValid) {
          console.error('Invalid password');
          throw new Error("Username or password is incorrect!");
        }

        return { email };
      },
    }),
  ],
};

export default NextAuth(authOptions);