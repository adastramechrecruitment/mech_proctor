const mongoose = require("mongoose");

const allowedSchema = new mongoose.Schema({
    name: String,
    registerNumber: String,
    password: String,
    hasAttempted: { type: Boolean, default: false }
});

module.exports = mongoose.model("AllowedCandidate", allowedSchema);

