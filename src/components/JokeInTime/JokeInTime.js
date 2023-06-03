import React, { useEffect, useState } from "react";
import { getJoke } from "../../api/getJoke";
import Button from "../Button/Button";
import classNames from "classnames/bind";
import styles from "./JokeInTime.module.css";

const cx = classNames.bind(styles);

const JokeInTime = () => {
  const [joke, setJoke] = useState(null);
  const [time, setTime] = useState(null);

  const getData = async () => {
    if (time) {
      const { data } = await getJoke();
      setJoke(data.value);
    }
  };

  useEffect(() => {
    if (time) {
      setTimeout(getData, 3000);
    }
  }, [time, joke]);

  const onClick = () => {
    if (!time) {
      return setTime(!time);
    }
    return setTime(!time);
  };

  return (
    <>
      <Button onClick={onClick} text={"Get joke in time"} />
      {joke && <h2 className={cx("container", { box: !time })}>{joke}</h2>}
    </>
  );
};

export default JokeInTime;
