import classes from "./CssModules.module.scss";
import { memo } from "react";
export const CnClickReset = memo((props) => {
  console.log("onClickReset");
  const { onClickReset } = props;
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modulesです</p>
      <button onClick={onClickReset}>リセット</button>{" "}
    </div>
  );
});
