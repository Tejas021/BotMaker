
const mongoose = require("mongoose");

const BotSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bot", BotSchema);