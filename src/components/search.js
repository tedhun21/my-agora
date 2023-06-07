import { useState } from "react";

const Search = ({ searchDiscussion }) => {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSearch = (event) => {
    event.preventDefault();
    searchDiscussion(text);
  };
  return (
    <div className="search__container">
      <form className="search__form">
        <label>검색</label>
        <input type="text" onChange={onChange} />
        <button onClick={onSearch}>search</button>
      </form>
    </div>
  );
};

export default Search;
