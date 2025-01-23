const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true,
    },
    lastnames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address_line1: {
      type: String,
      required: true,
    },
    address_line2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    ID_type: {
      type: String,
      required: true,
    },
    ID_number: {
      type: String,
      required: true,
    },
    ID_type: {
      type: String,
      required: true,
    },
    mo_earning: {
      type: Number,
      required: true,
      default: 0,
    },
    ID_photo_front: {
      type: String,
      required: true,
    },
    ID_photo_back: {
      type: String,
      required: true,
    },
    selfie: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
