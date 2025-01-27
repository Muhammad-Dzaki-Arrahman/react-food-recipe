import CustomeImage from "./CustomeImages";
export default function HeroSection() {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  return (
    <>
      <div className="section hero">
        <div className="col typography">
          <h1 className="title">
            What are we <span>eat?</span>
          </h1>
          <p className="info">
            TasteQuest is your go-to platform for endless recipe inspiration.
            Whether you're a pro in the kitchen or just starting out, we provide
            easy guides and creative ideas to make cooking fun. From timeless
            classics to exciting fusion dishes, TasteQuest is here to answer,
            "What’s for dinner?" Let’s cook something amazing together!
          </p>
          <button className="btn">Explore Now</button>
        </div>
        <div className="col gallery">
          {images.map((src, index) => (
            <CustomeImage key={index} imgSrc={src} pt={"90%"} />
          ))}
        </div>
      </div>
    </>
  );
}
