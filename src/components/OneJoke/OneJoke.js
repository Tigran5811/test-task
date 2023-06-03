import React, { useState } from "react";
import { getJoke } from "../../api/getJoke";
import styles from "./OneJoke.module.css";
import Button from "../Button/Button";

const OneJoke = () => {
  const [joke, setJoke] = useState(null);
  const [flag, setflag] = useState(null);

  const onClick = async () => {
    const { data } = await getJoke();
    setJoke(data.value);
    setflag(true);
  };
  const addFavorite = () => {
    if (flag) {
      const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
      if (favorite.length === 10) {
        favorite.shift();
      }
      const newFavorite = [...favorite, joke];
      localStorage.setItem("favorite", JSON.stringify(newFavorite));
      setflag(!flag);
    } else {
      const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
      favorite.pop();
      localStorage.setItem("favorite", JSON.stringify(favorite));
      setflag(!flag);
    }
  };
  return (
    <>
      <Button onClick={onClick} text={"Get one joke"} />
      {joke && (
        <div className={styles.container}>
          <h2>{joke}</h2>
          <Button
            onClick={addFavorite}
            text={flag ? "Add my favorite" : "remove"}
          />
        </div>
      )}
    </>
  );
};
export default OneJoke;
