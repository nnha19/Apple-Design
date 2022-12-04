import Container from "../../../components/Container";
import Header1 from "../../../components/Header1";

const SecondSection = () => {
  return (
    <section className="bg-primaryBg flex items-center h-[100vh]">
      <Container>
        <Header1 className="text-[28px] md:text-[40px] xl:text-[64px]  [&>*]:mb-12">
          <p>New Apple Originals every month.</p>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
          <p>Share Apple TV+ with your family.</p>
        </Header1>
      </Container>
    </section>
  );
};

export default SecondSection;
