import { useState } from "react";
import { url } from "../App";

const Input = () => {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [question, setQuestion] = useState();

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const textChange = (e) => {
    setQuestion(e.target.value);
  };

  const onClick = () => {
    fetch(`${url}/discussions`, { method: "POST", body: { name, title, question } })
  };
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required onChange={nameChange} />
          </div>
          <div className="form__input--title">
            <label for="title">Enter your title: </label>
            <input type="text" name="title" id="title" required onChange={titleChange} />
          </div>
          <div className="form__textbox">
            <label for="story">Your question: </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required onChange={textChange}></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="submit" onClick={onClick} />
        </div>
      </form>
    </section>
  );
};

export default Input;
