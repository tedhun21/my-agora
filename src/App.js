import Input from "./components/input";
import "./App.css";
import { useEffect, useState } from "react";
import DiscussionList from "./components/discussionList";
import Search from "./components/search";

export const url = "http://localhost:4000";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`${url}/discussions`)
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data);
      });
  }, []);
  const searchDiscussion = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredData(discussions);
    } else {
      const filteredData = discussions.filter((discussion) => discussion.title.toLowerCase().includes(searchText));
      setFilteredData(filteredData);
    }
  };

  return (
    <div className="App">
      <main>
        <h1>My Agora States</h1>
        <Input />
        <Search searchDiscussion={searchDiscussion} />
        {filteredData.length > 0 ? <DiscussionList discussions={filteredData} /> : <DiscussionList discussions={discussions} />}
        <div className="pagination__buttons">
          <button className="pagination__left">&larr;</button>
          <button className="pagination__right">&rarr;</button>
        </div>
      </main>
    </div>
  );
}

export default App;
