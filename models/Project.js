const {Schema, model} = require('mongoose')

const projectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
    type: String,
    required: [true, "Name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    status: {
        type: String,
        enum: ['active', 'closed'],
        default: 'active',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Project = model("Project", projectSchema)
module.exports = Project