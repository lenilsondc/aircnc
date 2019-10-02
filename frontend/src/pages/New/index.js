import React, { useState, useMemo } from "react";

import api from "../../services/api";
import "./styles.css";
import camera from "../../assets/camera.svg";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user_id = localStorage.getItem("user");
    const data = new FormData();

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, { headers: { user_id } });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={preview ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={({ target }) => setThumbnail(target.files[0])}
        />
        <img src={camera} alt="Selecione uma imagem" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa inscrível"
        value={company}
        onChange={({ target }) => setCompany(target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS * <span>(separadas por vírgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tenologias usam?"
        value={techs}
        onChange={({ target }) => setTechs(target.value)}
      />

      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={({ target }) => setPrice(target.value)}
      />

      <button type="submit" className="btn">
        CADASTRAR
      </button>
    </form>
  );
}
