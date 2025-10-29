const mongoose = require("mongoose");
const { Schema } = mongoose;


const problemSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title cannot be empty'],
    },
    description: {
        type: String,
        require: [true, 'Description cannot be empty'],
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        require: [true, 'Difficulty cannot be empty'],
        default: 'easy',
    },
    testCases: [
        {
            input: {
                type: String,
                require: true,
            },
            output: {
                type: String,
                require: true,
            },
            explanation: {
                type: String,
            }
        }
    ],
    editorial: {
        type: String,
    }
})

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;