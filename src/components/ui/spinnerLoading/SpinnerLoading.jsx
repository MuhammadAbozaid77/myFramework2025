import style from "./SpinnerLoading.module.css";
export default function SpinnerLoading() {
  return (
    <div>
      <span className={`${style.loader}`}></span>
    </div>
  );
}
