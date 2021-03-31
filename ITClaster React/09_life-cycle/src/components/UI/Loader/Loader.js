import classes from "./Loader.module.css";

function Loader({ width, height, background }) {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        background: `${background}`,
      }}
      className={classes.LoaderParent}
    >
      <div className={classes.Loader}>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
