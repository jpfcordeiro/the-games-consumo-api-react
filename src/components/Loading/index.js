import styles from "@/components/Loading/Loading.module.css";

export const LoadingComp = ({ loading }) => {
  return (
    <div
      className={loading ? styles.loading : styles.done}
    >
      {loading ? (
        <p>Carregando...</p>  
      ) : (
        <p>Conteúdo carregado</p> 
      )}
    </div>
  );
};
