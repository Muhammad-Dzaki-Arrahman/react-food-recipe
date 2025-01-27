export default function ImproveSkills() {
  const lists = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <>
      <div className="section improve-skills">
        <div className="col img">
          <img src="/img/gallery/img_10.jpg" alt="" />
        </div>
        <div className="col typography">
          <h1 className="title">Improve Your Cullinary Skills</h1>
          {lists.map((list, index) => (
            <p className="skill-item" key={index}>{list}</p>
          ))}
          <button className="btn">Register Now</button>
        </div>
      </div>
    </>
  );
}
