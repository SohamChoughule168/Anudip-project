const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  tenure: Number, // in months
  interestRate: Number,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  documents: [String], // Array of S3 file URLs
});

module.exports = mongoose.model("Loan", loanSchema);