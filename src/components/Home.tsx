import React, { useEffect, useState } from "react";

const Home = () => {
  let data: [number, boolean, string];
  data = [10, true, "Messi"];

  const [arritems, setArrritems] = useState<
    [{ name: string; email: string; salary?: number | string }]
  >([{ name: "", email: "", salary: "" }]);

  const [items, setItems] = useState<{
    name: string;
    email: string;
    salary?: number | string;
  }>({
    name: "",
    email: "",
    salary: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setItems({ ...items, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {};
  return (
    <div>
      <h2>{items.name}</h2>
      <h2>{items.email}</h2>
      <h2>{items.salary}</h2>
      <form action="">
        <input
          type="text"
          name="name"
          value={items.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          value={items.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="salary"
          value={items.salary}
          onChange={handleChange}
          placeholder="salary"
        />
      </form>
    </div>
  );
};

export default Home;
