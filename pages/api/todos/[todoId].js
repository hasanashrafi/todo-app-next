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
            console.log(id)
            const todoData = await User.findOne({"todos._id":id})
            console.log(todoData,"hi")
          
            return res.status(200).json({ status: "success", data: todoData })
        } catch (error) {
            console.log(error)
            return res.status(401).json({ status: "failed", message: "Error in find" })

        }

    }
}
export default handler