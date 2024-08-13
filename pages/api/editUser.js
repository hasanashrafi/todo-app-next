import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "failed", message: "Error in connecting to DB" })
    }

    const session = await getSession({ req })
    console.log(session);

    if (!session) {
        return res
            .status(401)
            .json({ status: "failed", message: "You are not logged in" })
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
        return res
            .status(404)
            .json({ status: "failed", message: "User doesn't exist" })
    }
    if (req.method === "PUT") {
        const { name, password, lastName, phone, email } = req.body;

        const isValid = verifyPassword(password, user.password)
        if (!isValid) {
            return res
                .status(422).json({ status: "failed", message: "Password incorrect!" })
        }
        user.name = name
        user.lastName = lastName;
        user.phone = phone
        user.email = email
        user.save()

    }
    res.status(200).json({ status: "success", message: "updated" })
}

export default handler