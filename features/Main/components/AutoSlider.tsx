import Button from "../../../components/Button";
import DivWithBgImg from "../../../components/DivWithBgImg";

const AutoSlider = () => {
  const movies = [
    {
      url: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/6b/45/de/6b45deea-8330-9295-3fb0-28aa450c151f/7e7e1ea3-863e-4491-af41-e291fc78eb09.png/1920x800sr.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w1280//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//gFyB6XHUrvd3FvgN7NQbS0gjYv7.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//effgnqJMX2lXvXhKlJt7Pm1TkcU.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//4x3pt6hoLblBeHebUa4OyiVXFiM.jpg",
    },
    {
      url: "https://image.tmdb.org/t/p/w500//4x3pt6hoLblBeHebUa4OyiVXFiM.jpg",
    },
  ];

  return (
    <div className="py-4">
      <div className="overflow-x-hidden">
        <div className="my-4 flex no-wrap slider">
          {movies.map(({ url }) => (
            <div className="slide-container relative ">
              <DivWithBgImg
                height={212}
                width={378}
                url={url}
                style={{ backgroundSize: "cover" }}
                className="rounded-xl min-w-[24rem] mx-4"
              />
              <Button
                className="w-[146px] h-[44px] font-bold absolute stream-btn "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,4rem)",
                }}
              >
                Stream Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="my-4 flex no-wrap slider">
          {movies.reverse().map(({ url }) => (
            <div className="slide-container relative ">
              <DivWithBgImg
                height={212}
                width={378}
                url={url}
                style={{ backgroundSize: "cover" }}
                className="rounded-xl min-w-[24rem] mx-4"
              />
              <Button
                className="w-[146px] h-[44px] font-bold absolute stream-btn "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,4rem)",
                }}
              >
                Stream Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Button className="block mx-auto bg-transparent text-primaryTxt border-[1px] border-primaryTxt hover:bg-transparent h-[46px]">
        See full lineup
      </Button>
    </div>
  );
};

export default AutoSlider;
