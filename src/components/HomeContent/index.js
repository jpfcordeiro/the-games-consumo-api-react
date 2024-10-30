import styles from "@/components/HomeContent/HomeContent.module.css";
import { LoadingComponent } from "../Loading";

export const HomeComponent = () => {
  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <LoadingComponent />
          <div className={styles.games} id="games"></div>
        </div>
      </div>
    </>
  );
};
