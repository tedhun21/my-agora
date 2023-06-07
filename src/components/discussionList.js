import Discussion from "./discussion";

const DiscussionList = ({ discussions }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussion__container">
        {discussions.map((discussion) => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))}
      </ul>
    </section>
  );
};

export default DiscussionList;
