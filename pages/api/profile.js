import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import { default as connectDB } from "@/utils/connectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {

    try {
        await connectDB()
    } catch (error) {
        console.log(error)
        return res
            .status(500).json({ status: "failed", message: "Error in connecting to DB" })
    }

    const session = await getSession({ req })
    if (!session) {
        return res
            .status(401).json({ status: "failed", message: "You are not logged in!" })

    }

    const user = await User.findOne({ email: session.user.email, })
    if (!user) {
        return res
            .status(404).json({ status: "failed", message: "User doesn't exist" })
    }

    if (req.method === "POST") {
        const { name, password, lastName, phone } = req.body;

        const isValid = verifyPassword(password, user.password)
        if (!isValid) {
            return res
                .status(422).json({ status: "failed", message: "Password incorrect!" })
        }
        user.name = name
        user.lastName = lastName;
        user.phone = phone
        user.save()

        res.status(200)
            .json({ status: "success", message: "User data updated", data: { name, email: session.user.email, lastName, phone } })
    } else if (req.method === "GET") {
        res.status(200)
            .json({
                status: "success",
                data: { name: user.name, lastName: user.lastName, phone: user.phone, email: user.email }
            })
    }
}

export default handler