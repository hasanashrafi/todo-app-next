import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    phone: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,128}$)/,
        ]
    },
    todos: [{
        title: String,
        status: String
    }],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const User = models.User || model("User", userSchema)

export default User