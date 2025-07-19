const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "Sedan",
        "SUV",
        "Hatchback",
        "Convertible",
        "Truck",
        "Van",
        "Electric",
        "Other",
      ],
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic"],
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    location: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
    },
    registrationNumber: {
      type: String,
      unique: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = { Product };
