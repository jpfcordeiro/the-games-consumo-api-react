import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import LoadingComp from "../Loading";

export const HomeContentComp = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:4000/games");
        if (!response.ok) {
          throw new Error("Falha ao carregar jogos");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  // Função para deletar um jogo
  const handleDeleteGame = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este jogo?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/game/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Falha ao deletar o jogo");
        }
        setGames((prevGames) => prevGames.filter((game) => game.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.homeContent}>
      <div className={styles.listGamesCard}>
        <div className={styles.title}>
          <h2>Lista de jogos</h2>
        </div>

        {loading && <LoadingComp loading={loading} />}

        <div className={styles.games}>
          <ul className={styles.listGames}>
            {games.length === 0 && !loading && <p>Não há jogos para exibir.</p>}

            {games.map((game) => (
              <li key={game.id} className={styles.gameItem}>
                <div className={styles.gameImg}>
                  <img
                    src={game.coverUrl || "/images/game_cd_cover.png"} 
                    alt={game.name}
                  />
                </div>
                <div className={styles.gameInfo}>
                  <h3>Título: {game.name}</h3>
                  <p>Plataforma: {game.platform}</p>
                  <p>Ano: {game.releaseYear}</p>
                  <p>Preço: {game.price}</p>
                  <button
                    onClick={() => handleDeleteGame(game.id)}
                    className={styles.deleteButton}
                  >
                    Deletar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
