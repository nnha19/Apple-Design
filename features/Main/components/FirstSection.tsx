import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Header1 from "../../../components/Header1";
import Header2 from "../../../components/Header2";
import Link from "./Link";

const FirstSection = () => {
  return (
    <section
      style={{
        height: "calc(100vh - 44px)",
      }}
      className=" bg-primaryBg min-h-[440px]"
    >
      <div className="h-full">
        <div className="bg-[#1d1d20b8] border-solid border-b-[1px] border-[#ffffff52]">
          <div className="flex justify-between max-w-[980px] mx-auto h-[52px] items-center p-4 ">
            <Header2>Apple TV+</Header2>
            <Button className="min-w-[unset] w-max h-[24px] text-[12px]">
              Stream now
            </Button>
          </div>
        </div>
        <div className="bg-[#1d1d20b8] h-[52px] flex items-center justify-center">
          <p className="text-[14px] text-primaryTxt text-center font-medium p-12">
            MLS Season Pass. Stream every Major League Soccer match. Coming
            soon.* <Link>Notify me</Link>
          </p>
        </div>

        <Container className="h-full">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "calc(100% - 105px)",
            }}
            className="h-full"
          >
            <div className="mt-[5rem]">
              <Header1 className="text-[40px] xl:text-[96px] md:text-[72px]">
                <p className="text-primaryTxt font-bold">
                  All Apple Originals. <br />
                  Only on Apple TV+.
                </p>
              </Header1>
              <Button className="mt-[50px]">Stream now</Button>
            </div>
            <p className="mb-8 text-[19px] text-primaryTxt font-bold">
              Watch on the appletv app
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FirstSection;
