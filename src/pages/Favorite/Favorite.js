import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Favorite.module.css";

const Favorite = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );

  const removeFavorite = (i) => {
    const newList = list.toSpliced(i, 1);
    setList(newList);
    localStorage.setItem("favorite", JSON.stringify(newList));
  };

  const clearAll = () => {
    localStorage.clear();
    setList([]);
  };
  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.container_button}>
        <Button text="Home" onClick={onClick} />
        <Button text="Clear all favorite list" onClick={clearAll} />
      </div>
      <div className={styles.container}>
        {list.length > 0 &&
          list.map((item, i) => {
            return (
              <div key={i} className={styles.box}>
                <p>{`${i + 1}. ${item}`}</p>
                <Button
                  onClick={() => {
                    removeFavorite(i);
                  }}
                  text="Remove"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Favorite;
