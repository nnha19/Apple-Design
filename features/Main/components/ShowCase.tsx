import Image from "next/image";
import React from "react";
import Button from "../../../components/Button";
import Link from "./Link";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-[28px] lg:text-[48px] font-medium leading-[1] tracking-tighter text-center mt-[20px] ${className}`}
  >
    {children}
  </p>
);

const TwoColumnGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-[97%] max-w-[1360px] mx-auto bg-[#f5f5f7] h-full mb-11 py-4 md:pt-[108px] min-h-[584px] grid grid-cols-[100%] md:grid-cols-[50%_50%] ${className}`}
  >
    {children}
  </div>
);

export const DivWithBgImg = ({
  url,
  children,
  className,
}: {
  url: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPositionX: "center",
    }}
    className={`md:ml-24 mi-h-[182px] mb-4 md:mb-0 ${className}`}
  >
    {children}
  </div>
);

const ShowCase = () => {
  return (
    <section>
      <TwoColumnGrid>
        <DivWithBgImg
          className="order-2 md:-order-1"
          url="https://www.apple.com/v/apple-tv-plus/ag/images/overview/bundle__e93qdcv7mtm6_large.jpg"
        />
        <div>
          <div className="flex flex-col  h-full">
            <h2 className="text-center font-bold  flex w-max mx-auto">
              <Image
                src="/images/apple-logo.png"
                height={30}
                width={30}
                alt="Logo"
              />
              <span className="text-[30px]">One</span>
            </h2>
            <Header>
              Bundle Apple TV+ with <br /> up to five other great services.
              <br /> And enjoy more for less.
            </Header>
            <Button className="mx-auto mt-[20px] bg-[#1d1d1f] hover:bg-[black] text-white h-[44px]">
              Try Apple One free3
            </Button>
            <Link className=" mt-8 w-max mx-auto">Learn More</Link>
          </div>
        </div>
      </TwoColumnGrid>
      <TwoColumnGrid>
        <div>
          <div className="flex flex-col h-full max-w-[535px] mx-auto">
            <Header className="md:text-start">
              The Apple Music <br /> Student Plan comes <br /> with Apple TV+
              for free.4
            </Header>
            <Button className="mx-auto md:mx-[unset] mt-[20px] bg-[#1d1d1f] hover:bg-[black] text-white h-[44px]">
              Try Apple One free3
            </Button>
          </div>
        </div>
        <DivWithBgImg url="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_large.jpg" />
      </TwoColumnGrid>

      <TwoColumnGrid className="md:pt-0">
        <div className="mx-auto flex flex-col">
          <div className="md:pb-[100px] relative md:top-[106px]">
            <span className="text-[#BF4800] block text-center">New</span>
            <h2 className="text-center font-bold  flex w-max mx-auto">
              <Image
                src="/images/apple-logo.png"
                height={30}
                width={30}
                alt="Logo"
              />
              <span className="text-[30px]">TV 4K</span>
            </h2>
            <Header>
              The Apple experience.
              <br /> Cinematic in every sense.
            </Header>

            <div className="flex w-max mx-auto items-center my-8">
              <Button className="bg-[#0071E3] text-white w-max min-w-0 hover:bg-[#0071e3db] mr-6">
                Buy
              </Button>
              <Link>Learn more</Link>
            </div>
          </div>

          <DivWithBgImg
            className="min-h-[276px]"
            url="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_remote__igmcbznr1w2u_large.jpg"
          />
        </div>
        <div className="mx-auto flex flex-col">
          <div className="md:pb-[100px] relative md:top-[106px]">
            <p className="text-center font-medium  flex w-max mx-auto text-[32px]">
              AirPlay
            </p>
            <Header>
              Bring Apple TV+ to <br /> a screen near you.
            </Header>
            <div className="flex w-max mx-auto items-center my-8">
              <Link>Learn more</Link>
            </div>
          </div>
          <DivWithBgImg
            className="min-h-[276px]"
            url="https://www.apple.com/v/apple-tv-plus/ag/images/overview/air_play__dyuvvwnd5riq_large.jpg"
          />
        </div>
      </TwoColumnGrid>
    </section>
  );
};

export default ShowCase;
