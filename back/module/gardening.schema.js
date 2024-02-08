const { default: mongoose, Schema } = require("mongoose");

const combinedSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const gardeningModel = mongoose.model("gardening", combinedSchema);
const homepotModel = mongoose.model("homepot", combinedSchema);
const domesticModel = mongoose.model("domestic", combinedSchema);
module.exports = { gardeningModel, domesticModel, homepotModel };
