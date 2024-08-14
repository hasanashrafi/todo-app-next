import User from "@/models/User"
import connectDB from "@/utils/connectDB";

async function handler(req, res) {
    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "failed", message: "Error in connecting to DB" })
    }

    const id = req.query.todoId

    if (req.method === "GET") {
        try {
            const todoData = await User.findOne({ "todos._id": id })
            if (todoData) {
                const todo = todoData.todos.find(todo => todo._id.toString() === id);
                console.log('Todo found:', todo);
                return res.status(200).json({ status: "success", data: todo })
            } else {
                console.log('No user found with the specified todo ID.');
            }
        } catch (error) {
            console.log(error)
            return res.status(401).json({ status: "failed", message: "Error in find" })

        }
    } else if (req.method === "PATCH") {
        const { title, status, description } = req.body;
        const todoId = req.query.id;

        if (!todoId || !title || !status) {
            return res.status(422).json({ status: "failed", message: "Invalid Data!" });
        }

        const result = await User.updateOne(
            { "todos._id": todoId },
            {
                $set: {
                    "todos.$.status": status,
                    "todos.$.description": description,
                    "todos.$.title": title
                },
            }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ status: "failed", message: "Todo not found" });
        }

        return res.status(200).json({ status: "success", message: "Todo updated" });
    } else {
        return res.status(405).json({ status: "failed", message: "Method not allowed" });
    }
}


export default handler