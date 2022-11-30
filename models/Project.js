import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
          },
        title: {
            type: String,
            required: true,
            unique: false,
          },
        description: {
            type: String,
            required: false,
            unique: false,
          },
    },
);
export default mongoose.model('project', ProjectSchema);