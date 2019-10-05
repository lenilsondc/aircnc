const mongoose = require("mongoose");

const SpotSchema = mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  // TODO: move url to enviroment variable
  return `http://192.168.0.103:8082/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
