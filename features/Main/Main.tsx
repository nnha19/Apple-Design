import Features from "./components/Features";
import FirstSection from "./components/FirstSection";
import MovieSlider from "./components/MovieSlider";
import Pricing from "./components/Pricing";
import SecondSection from "./components/SecondSection";

const Main = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <Pricing />
      <MovieSlider />
      <Features />
    </div>
  );
};

export default Main;
