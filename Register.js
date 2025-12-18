import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", form);
      console.log("User registered", res.data);
    } catch (error) {
      console.error("Failed to register user", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;