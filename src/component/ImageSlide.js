import { DataImages } from "./Data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useState } from "react";
import "./ImageSlide.css";

const ImageSlide = () => {
  const [datas, setDatas] = useState(DataImages);
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === datas.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handlePrev() {
    if (index === 0) {
      setIndex(datas.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function handleDot(dataIndex) {
    setIndex(dataIndex);
  }
  return (
    <>
      <div className="image-slid ">
        {datas.map((data, dataIndex) => {
          const { id, img, icon } = data;
          let position = "Next";
          if (index === dataIndex) {
            position = "active";
          }
          if (
            dataIndex === index - 1 ||
            (index === 0 && dataIndex === datas.length - 1)
          ) {
            position = "prev";
          }
          return (
            <>
              <section key={id} className={position}>
                <img src={img} alt="" />
              </section>
              <div
                style={{
                  color: `${position === "active" ? "aqua" : "black"}`
                }}
                className="icons"
                onClick={() => handleDot(dataIndex)}
              >
                {icon}
              </div>
            </>
          );
        })}
      </div>
      <div className="dot-next" onClick={handleNext}>
        {" "}
        <FaArrowAltCircleRight />
      </div>
      <div className="dot-prev" onClick={handlePrev}>
        {" "}
        <FaArrowAltCircleLeft />
      </div>
    </>
  );
};
export default ImageSlide;
