import React, { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Booking... ⏳");

    try {
      const res = await fetch("http://127.0.0.1:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("🎉 Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server not reachable. Please try again later.");
    }
  };

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10"
    id="appointment"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Book an Appointment 💇‍♀️
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded-lg"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded-lg"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="border p-2 rounded-lg"
        >
          <option value="">Select a Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Facial">Facial</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>

        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border p-2 rounded-lg"
        />

        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="border p-2 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Any message or preference (optional)"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold p-2 rounded-lg transition-all"
        >
          Book Now
        </button>
      </form>

      {message && (
        <p
          className={`text-center mt-4 font-medium ${
            message.startsWith("🎉") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default BookAppointment;
