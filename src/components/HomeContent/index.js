.loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 50vh;
    color: var(--secondary-color);
    font-family: "Poppins";
    font-size: 1rem;
  }
  
  .loading img {
    width: 3.5rem;
  }
  
  .done {
    display: none;
  }

export const HomeComponent = () => {
  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading />
          <div className={styles.games} id="games"></div>
        </div>
      </div>
    </>
  );
};
