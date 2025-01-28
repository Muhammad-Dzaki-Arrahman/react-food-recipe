import ChiefCard from "./ChiefCard";
export default function ChiefSection() {
  const chiefs = [
    {
      name: "Juan Carlos",
      img: "img/top-chiefs/img_1.jpg",
      recipesCount: 10,
      cuisine: "Mexican",
    },
    {
      name: "Emily Brown",
      img: "img/top-chiefs/img_2.jpg",
      recipesCount: 15,
      cuisine: "Italian",
    },
    {
      name: "Akira Yamamoto",
      img: "img/top-chiefs/img_3.jpg",
      recipesCount: 8,
      cuisine: "Japanese",
    },
    {
      name: "Fatima Hassan",
      img: "img/top-chiefs/img_4.jpg",
      recipesCount: 12,
      cuisine: "Middle Eastern",
    },
    {
      name: "Luca Rossi",
      img: "img/top-chiefs/img_5.jpg",
      recipesCount: 20,
      cuisine: "Mediterranean",
    },
    {
      name: "Chen Wei",
      img: "img/top-chiefs/img_6.jpg",
      recipesCount: 7,
      cuisine: "Chinese",
    },
  ];
  return (
    <>
      <div className="section chiefs">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
          {chiefs.map((chief) => (
            <ChiefCard key={chief.name} chief={chief} />
          ))}
        </div>
      </div>
    </>
  );
}
