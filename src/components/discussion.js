const Discussion = ({ discussions }) => {
  console.log(discussions);
  return (
    <ul className="discussion__container">
      {discussions.map(function (discussion) {
        return (
          <li key={discussion.id}>
            <div className="discussion__avatar--wrapper">
              <img className="discussion__avatar--image" alt="avatar" src={discussion.avatarUrl} />
            </div>
            <div className="discussion__content">
              <h2 className="discussion__title">
                <a href={discussion.url}>{discussion.title}</a>
                <div className="discussion__information">
                  {discussion.author} / {new Date(discussion.createdAt).toLocaleString()}
                </div>
              </h2>
            </div>
            <div className="discussion__answered">
              <p>☑</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Discussion;
