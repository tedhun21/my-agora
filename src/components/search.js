import { useState } from "react";

const Search = ({ searchDiscussion, setIsSearch }) => {
  const [searhText, setSearhText] = useState("");
  const onChange = (event) => {
    setSearhText(event.target.value.toLowerCase());
    searchDiscussion(searhText);
  };
  const onSearch = (event) => {
    event.preventDefault();
    searchDiscussion(searhText);
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
