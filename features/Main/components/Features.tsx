import Image from "next/image";
import Container from "../../../components/Container";
import Header1 from "../../../components/Header1";
import Link from "./Link";
import DivWithBgImg from "../../../components/DivWithBgImg";

const Features = () => {
  const devices = [
    {
      icon: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_apple_tv__r2nel0gcigam_large.jpg",
      text: "Apple TV",
    },
    {
      icon: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_iphone__c914mkstye0y_large.jpg",
      text: "iPhone",
    },
    {
      icon: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg",
      text: "iPad",
    },
    {
      icon: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_mac__b7y797p7oouq_large.jpg",
      text: "Mac",
    },
    {
      icon: "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg",
      text: "AirPlay",
    },
  ];

  const smartTvs = [
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg",
    },
    {
      iconUrl:
        "	https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg",
    },
    {
      iconUrl:
        "	https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg",
    },
    {
      iconUrl:
        "	https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    },
    {
      iconUrl:
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    },
  ];

  return (
    <section className="bg-primaryTxt min-h-[100vh] pb-[150px]">
      <Container>
        <div className="lg:w-[980px] mx-auto">
          <div className="pt-[130px] pb-[52px]">
            <DivWithBgImg
              height={86}
              width={86}
              className="mx-auto"
              url="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_app_icon__cth1s5qlqpyu_xlarge.png"
            />
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
          <div className="flex justify-center md:justify-between flex-wrap">
            {devices.map(({ icon, text }) => (
              <div className="min-w-[130px] pb-[62px]">
                <DivWithBgImg className="mx-auto" url={icon} />
                <p className="text-primaryBg text-[19px] font-medium text-center mt-2">
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(191px, 1fr))",
              }}
              className="flex justify-between flex-wrap wrap mt-[38px]"
            >
              {smartTvs.map(({ iconUrl }) => (
                <DivWithBgImg
                  height={100}
                  width={100}
                  className="my-30 mx-auto"
                  url={iconUrl}
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
