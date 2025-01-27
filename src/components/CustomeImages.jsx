export default function CustomeImage({ imgSrc, pt }) {
  return (
    <>
      <div className="custome-image" style={{ paddingTop: pt }}>
        <img src={imgSrc} alt="" />
      </div>
    </>
  );
}
