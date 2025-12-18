const Loan = require("../models/Loan");
const S3 = require("../utils/s3"); // AWS S3 utility for file uploads

exports.submitLoan = async (req, res) => {
  const { amount, tenure, interestRate } = req.body;
  const uploadedDocs = req.files.map(file => S3.uploadToS3(file));

  try {
    const loan = new Loan({
      borrower: req.user.id,
      amount,
      tenure,
      interestRate,
      documents: uploadedDocs,
    });
    await loan.save();
    res.status(201).json({ message: "Loan submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit loan", error: err });
  }
};