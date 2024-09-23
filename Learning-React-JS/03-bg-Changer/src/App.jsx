import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("seagreen");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-2 py-2 rounded">
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Orange" }}
            onClick={() => {
              setColor("Orange");
            }}
          >
            Orange
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Green" }}
            onClick={() => {
              setColor("Green");
            }}
          >
            Green
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Blue" }}
            onClick={() => {
              setColor("Blue");
            }}
          >
            Blue
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => {
              setColor("Yellow");
            }}
          >
            Yellow
          </button>

          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "Pink" }}
            onClick={() => {
              setColor("Pink");
            }}
          >
            Pink
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold"
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("Grey");
            }}
          >
            Grey
          </button>
          <button
            className=" px-4 py-1  outline-none rounded-full font-bold "
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
