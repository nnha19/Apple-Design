import Image from "next/image";
import ReactSwipe from "react-swipe";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import Button from "../../../components/Button";
import AutoSlider from "./AutoSlider";

const manualSlider = [
  {
    url: "url(https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/6b/45/de/6b45deea-8330-9295-3fb0-28aa450c151f/7e7e1ea3-863e-4491-af41-e291fc78eb09.png/1920x800sr.jpg)",
    title: "The very bottom of top secret",
    genre: "Holiday",
  },
  {
    url: "url(https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/6b/45/de/6b45deea-8330-9295-3fb0-28aa450c151f/7e7e1ea3-863e-4491-af41-e291fc78eb09.png/1920x800sr.jpg)",
    title: "The very bottom of top secret",
    genre: "Holiday",
  },
  {
    url: "url(https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/6b/45/de/6b45deea-8330-9295-3fb0-28aa450c151f/7e7e1ea3-863e-4491-af41-e291fc78eb09.png/1920x800sr.jpg)",
    title: "The very bottom of top secret",
    genre: "Holiday",
  },
];

const MovieSlider = () => {
  let reactSwipeEl: any;

  return (
    <section className="min-h-[70vh] bg-primaryBg">
      <div className="h-[506px] relative">
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          {manualSlider.map(({ url, title, genre }) => (
            <div
              style={{
                backgroundImage: url,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
              }}
              className="h-[506px]"
            >
              <div
                style={{
                  transform: "translateX(-50%)",
                }}
                className="absolute bottom-[3rem] flex justify-between w-4/5 left-[50%] "
              >
                <p className="text-[24px] text-primaryTxt">
                  <b>{genre}</b> : {title}
                </p>
                <Button>Stream Now</Button>
              </div>
            </div>
          ))}
        </ReactSwipe>
        <IoIosArrowDropleft
          style={{ top: "50%", left: "0", transform: "translateY(-50%)" }}
          className=" text-white absolute text-[4rem] hover:cursor-pointer"
          onClick={() => reactSwipeEl.prev()}
        />
        <IoIosArrowDropright
          style={{ top: "50%", right: "0", transform: "translateY(-50%)" }}
          className=" text-white absolute text-[4rem] hover:cursor-pointer"
          onClick={() => reactSwipeEl.next()}
        />
      </div>

      <AutoSlider />
    </section>
  );
};

export default MovieSlider;
