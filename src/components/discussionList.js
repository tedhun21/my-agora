import Discussion from "./discussion";

const DiscussionList = ({ discussions }) => {
  return (
    <section className="discussion__wrapper">
      <Discussion discussions={discussions} />
    </section>
  );
};

export default DiscussionList;
