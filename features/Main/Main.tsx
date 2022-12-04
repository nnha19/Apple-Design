import Features from "./components/Features";
import FirstSection from "./components/FirstSection";
import MovieSlider from "./components/MovieSlider";
import Pricing from "./components/Pricing";
import QAndA from "./components/QandA";
import SecondSection from "./components/SecondSection";
import ShowCase from "./components/ShowCase";

const Main = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <Pricing />
      <MovieSlider />
      <Features />
      <QAndA />
      <ShowCase />
    </div>
  );
};

export default Main;
