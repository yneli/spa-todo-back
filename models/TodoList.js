import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project',
            required: true,
          },
        text: {
            type: String,
            required: true,
            unique: false,
          },
        createData: {
            type: String,
            required: true,
            unique: false,
        },
        workTimer: {
            type: String,
            require: true,
            unique: false,
        },
        status: {
            type: String,
            require: true,
            unique: false,
            default: "Queue",
        },
        endData: {
            type: String,
            require: true,
            unique: false,
        },
        priority: {
            type: String,
            require: true,
            default: "Важно",
            unique: false,
        },
        description: {
            type: String,
            require: false,
            unique: false,
        },

    },
);
export default mongoose.model('todo', TodoSchema);