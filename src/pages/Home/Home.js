import Button from "../../components/Button/Button";
import JokeInTime from "../../components/JokeInTime/JokeInTime";
import OneJoke from "../../components/OneJoke/OneJoke";
import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/favorite");
  };
  return (
    <div className={styles.container}>
      <Button onClick={onClick} text={`Favorite`} />
      <OneJoke />
      <JokeInTime />
    </div>
  );
};
export default Home;
