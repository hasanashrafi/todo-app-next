import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";



async function handler(req, res) {
    if (req.method !== "POST") return;

    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: "failed", message: "Error in Connecting DB" })
    }

    const { name, lastName, email, password, phone } = req.body
    if (!email || !password) {
        return res
            .status(422)
            .json({ status: "failed", message: "Invalid Data" })
    }

    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        return res
            .status(422)
            .json({ status: "failed", message: "user already exist" })
    }

    const hashedPassword = await hashPassword(password)

    const newUser = await User.create({ name: name, lastName: lastName, email: email, password: hashedPassword, phone: phone })
    console.log(newUser);

    res.status(201)
        .json({ status: "success", message: "User Created" })

}


export default handler