import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const CreateContentComp = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title && platform && year && price !== "") {
      const game = {
        title,
        platform,
        year,
        price,
      };

      try {
        const response = await axios.post("http://localhost:4000/game", game);
        if (response.status === 201) {
          router.push("/")
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor, preencha todos campos.");
    }
  };

  return (
    <>
      <h2>Cadastrar novo jogo:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Insira o título do jogo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="platform"
          placeholder="Insira a plataforma do jogo"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="year"
          placeholder="Insira o ano do jogo"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Insira o preço do jogo"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
};
export default CreateContentComp;
