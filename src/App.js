import { useState } from "react";
import { useEffect, useCallback } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { CnClickReset } from "./components/CnClickReset";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

export const App = () => {
  console.log("go");
  // Stateの定義
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  // ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  useEffect(() => {
    console.log("ok");
  }, [num]);

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <CnClickReset onClickReset={onClickReset} />
      <CssModules>元気です!</CssModules>
      <p>
        {num}
        {count}
      </p>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      ></button>

      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
    </>
  );
};

//useSelectorはアクセス, useDipatchで更新
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   const [incrementAmount, setIncrementAmount] = useState("2");

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>
//       <input
//         value={incrementAmount}
//         onChange={(e) => setIncrementAmount(e.target.value)}
//       />
//       <button onClick={() => dispatch(increment())}>＋</button>
//       <button onClick={() => dispatch(decrement())}>ー</button>
//       <button
//         onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
//       >
//         追加
//       </button>
//     </div>
//   );
// }

// export default App;
