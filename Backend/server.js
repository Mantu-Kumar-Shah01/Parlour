import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Appointment } from "./models/Appointment.js";

dotenv.config();
const app = express();

// Middleware
const allowedOrigins = (
  process.env.FRONTEND_ORIGINS ||
  "http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000"
).split(",");

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("💅 Parlour Appointment Backend is running!");
});

// POST: Book appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const { name, phone, service, date, time, message } = req.body;

    if (!name || !phone || !service || !date || !time) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled" });
    }

    const newAppointment = new Appointment({
      name,
      phone,
      service,
      date,
      time,
      message,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// GET: All appointments
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch appointments" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://127.0.0.1:${PORT}/`)
);
