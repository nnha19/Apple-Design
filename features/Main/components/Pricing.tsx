import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Header2 from "../../../components/Header2";

const Pricing = () => {
  const pricingCards = [
    {
      header: "Buy an Apple device",
      feature: "3 Months free",
      description:
        "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.1",
      btnText: "Check eligibility",
    },
    {
      header: "Free 7-day trial",
      feature: "$6.99/mo.",
      description:
        "A monthly subscription is just $6.99 per month after a free 7-day trial. Share Apple TV+ with your family.2",
      btnText: "Try it free",
    },
    {
      header: "Free 1‑month trial",
      feature: "Apple One",
      description:
        "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less. Learn more",
      btnText: "Try Apple One free",
    },
  ];

  return (
    <section className="min-h-[60vh] bg-primaryBg">
      <Container>
        <div className="flex flex-col lg:flex-row">
          {pricingCards.map(({ header, feature, description, btnText }) => (
            <div className="w-max-[33.3333333333%] mb-[25px]">
              <Header2 className="text-[28px]">{header}</Header2>
              <Header2 className="text-[40px] font-bold">{feature}</Header2>
              <p className="text-[#a1a1a6] text-[17px] mt-9px min-h-[100px] max-w-[83.3333333333%] mb-[5px] lg:mb-[31px]">
                {description}
              </p>
              <Button className="h-[44px]">{btnText}</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
