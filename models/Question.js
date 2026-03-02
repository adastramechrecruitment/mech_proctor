const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionText: String,
    options: [String],
    correctAnswer: Number  // index (0,1,2,3)
});

module.exports = mongoose.model("Question", questionSchema);

