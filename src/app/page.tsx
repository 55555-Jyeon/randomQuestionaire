import ClientQuestionComponent from "./_component/clientQuestionaires";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Random Interview Question</h1>
      <ClientQuestionComponent />
    </div>
  );
};
export default Home;
