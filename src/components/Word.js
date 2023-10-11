import React from "react";
import Char from "./Char";

function Word(props) {
  // const [givenWord, setGivenWord] = useState(props.word["word"].split(""));
  let givenWord = props.word["word"].split("");
  return props.word["status"] !== "tracking" ? (
    <span
      className={`${
        props.word["status"] === "untracked"
          ? "fs-2 opacity-100 text-secondary fw-bolder text-opacity-50"
          : props.word["status"] === "correct"
          ? "fs-2 text-success fw-bolder"
          : props.word["status"] === "incorrect"
          ? "fs-2 text-danger fw-bolder"
          : props.word["status"] === "partially-incorrect"
          ? "fs-2 text-danger fw-bolder opacity-50"
          : "fs-2 opacity-50 fw-bolder"
      }`}
    >
      {props.word["word"]}
      <span> </span>
    </span>
  ) : (
    <span>
      {givenWord.map((element, index) => {
        return (
          <Char
            key={index}
            givenCharacter={element}
            typedCharacter={props.typedWord[index]}
          />
        );
      })}
      <span className="fs-2 fw-bolder"> </span>
    </span>
  );
}

export default Word;
