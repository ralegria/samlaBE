const express = require("express");
const router = express.Router();

const {
  getCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

router.get("/", getCustomers);
router.get("/:id", getSingleCustomer);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
