import Image from "next/image";
import Container from "../../../components/Container";
import Header1 from "../../../components/Header1";
import Header2 from "../../../components/Header2";
import Link from "./Link";

const Features = () => {
  const devices = [
    { icon: "", text: "Apple TV" },
    { icon: "", text: "iPhone" },
    { icon: "", text: "iPad" },
    { icon: "", text: "Mac" },
    { icon: "", text: "AirPlay" },
  ];

  const smartTvs = [
    { iconUrl: "https://www.flaticon.com/free-icons/smart-tv" },
    { iconUrl: "https://www.flaticon.com/free-icons/smart-tv" },
    { iconUrl: "https://www.flaticon.com/free-icons/smart-tv" },
  ];

  return (
    <section className="bg-primaryTxt min-h-[100vh] pb-[150px]">
      <Container>
        <div className="lg:w-[980px] mx-auto">
          <div className="pt-[130px] pb-[52px]">
            <h2 className="h-[86px] w-[86px] mx-auto">TVLogo</h2>
            <div>
              <Header1 className="text-[28px] md:text-[40px] lg:text-[72px] xl:text-[80px] text-primaryBg text-center leading-[1] lg:tracking-[-2.9px]">
                Watch Apple TV+ anywhere <br /> on the Apple TV app.
              </Header1>
              <p className="text-[17px] text-center mt-[20px] font-medium">
                Find the Apple TV app on your favorite Apple devices. <br /> Or
                watch Apple TV+ online at{" "}
                <Link href="https://tv.apple.com/">tv.apple.com.</Link>
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            {devices.map(({ icon, text }) => (
              <div className="pb-[62px]">
                {icon}
                <p className="text-primaryBg text-[19px] font-medium text-center">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Header1 className="text-[28px] lg:font-medium  md:text-[40px] lg:text-[40px]  text-primaryBg text-center leading-[1] lg:tracking-[-2.9px]">
              See it on your smart TV <br /> or streaming device.
            </Header1>
            <div className="flex flex-col items-center mt-[13.6px]">
              <Link className="font-medium">Set up your device </Link>
              <Link className="font-medium mt-[6.8px]">
                Explore compatible devices
              </Link>
            </div>
            <div className="flex justify-between flex-wrap wrap mt-[38px]">
              {smartTvs.map(({ iconUrl }) => (
                <Image
                  alt="smart-tv"
                  height={50}
                  width={50}
                  src="/images/tv-monitor.png"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
