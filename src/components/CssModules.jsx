import classes from "./CssModules.module.scss";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./redux/counterSlice";

export const CssModules = memo(() => {
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  console.log("okz");
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modulesです</p>
      <button className={classes.button}>ボタン</button>

      <p>{count}</p>
    </div>
  );
});
