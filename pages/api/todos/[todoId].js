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
    }
}
export default handler