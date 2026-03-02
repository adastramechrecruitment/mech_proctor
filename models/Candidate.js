const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    questionId: mongoose.Schema.Types.ObjectId,
    selectedOption: Number,
    correctOption: Number,
    isCorrect: Boolean
});

const candidateSchema = new mongoose.Schema({
    name: String,
    registerNumber: String,
    startTime: Date,
    endTime: Date,
    score: Number,
    answers: [answerSchema],   // 🔥 NEW
    tabSwitches: { type: Number, default: 0 },
    fullscreenExits: { type: Number, default: 0 },
    isSubmitted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Candidate", candidateSchema);
