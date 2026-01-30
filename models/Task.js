const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  status: {
    type: String,
    trim: true,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  }
}, {
  timestamps: true
});

const Task = model("Task", taskSchema);

module.exports = Task;