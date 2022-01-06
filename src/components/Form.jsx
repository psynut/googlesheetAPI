import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <form>
      <input
        name="userName"
        onChange={handleChange}
        value={form.userName}
        placeholder="UserName"
      />
      <input
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
        placeholder="First Name"
      />
      <input
        name="lastName"
        onChange={handleChange}
        value={form.lastName}
        placeholder="Last Name"
      />
      <input
        name="email"
        onChange={handleChange}
        value={form.email}
        placeholder="Email Address"
        type="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={form.password}
        placeholder="password"
        type="password"
      />
      <input
        name="passwordConfirm"
        onChange={handleChange}
        value={form.passwordConfirm}
        placeholder="Confirm Password"
        type="password"
      />
    </form>
  );
}

export default Form;
