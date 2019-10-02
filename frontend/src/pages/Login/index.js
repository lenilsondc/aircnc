import React, { useState } from "react";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);
    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para a sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL*</label>
        <input
          id="name"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button className="btn" type="sumbit">
          Entrar
        </button>
      </form>
    </>
  );
}
