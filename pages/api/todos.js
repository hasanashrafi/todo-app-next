import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { sortTodos } from "@/utils/sortTodos";

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

    if (req.method === "POST") {
        const { title, status, description } = req.body;

        console.log({ title, status, description })
        const session = await getSession({ req })
        console.log(session);

        if (!session) {
            return res
                .status(401)
                .json({ status: "failed", message: "You are not logged in" })
        }

        if (!title || !status) {
            return res
                .status(422)
                .json({ status: "failed", message: "invalid data!" })
        }

        user.todos.push({ title: title, status: status, description: description })
        user.save()

        res.status(201)
            .json({ status: "success", message: "Todo created!" })

    } else if (req.method === "GET") {

        const sortedData = sortTodos(user.todos)
        res.status(200).json({ status: "success", data: { todos: sortedData } })

    } else if (req.method === "PATCH") {
        const { id, status } = req.body;
        if (!id || !status) {
            return res
                .status(422)
                .json({ status: "failed", message: "Invalid Data!" })
        }
        const result = await User.updateOne(
            { "todos._id": id },
            { $set: { "todos.$.status": status } }
        )
        res.status(200)
            .json({ status: "success", message: "todo updated" })
    }
}

export default handler