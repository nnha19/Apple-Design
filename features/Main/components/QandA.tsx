import Accordion from "../../../components/Accordion";
import Container from "../../../components/Container";
import Header1 from "../../../components/Header1";

const QAndA = () => {
  const questionsAndAnswers = [
    {
      question: "What is Apple TV+",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "How can I watch it?",

      answer:
        "Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com.",
    },
    {
      question: "Can I share with family?",
      answer:
        "Of course. Apple TV+ lets you share your subscription with up to five family members.",
    },
    {
      question: "Are there commercials?",
      answer:
        "Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.",
    },
    {
      question: "Can I download to watch offline?        ",
      answer:
        "Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.",
    },
  ];
  return (
    <section className="pb-[84px]">
      <Container>
        <Header1 className="text-primaryBg mb-[52px] text-center text-[28px] md:text-[40px] lg:text-[72px] xl:text-[80px]">
          Questions? Answers.
        </Header1>
        {questionsAndAnswers.map(({ question, answer }) => (
          <Accordion question={question}>
            <span className="mt-4 block text-start text[17px] text-[#1D1D1f]">
              {answer}
            </span>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default QAndA;
