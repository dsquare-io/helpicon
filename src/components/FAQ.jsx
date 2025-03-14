import {useState} from "react";
import AnimateHeight from 'react-animate-height';

const FAQS = [
    {
        question: "Vad är en 'Helpee'?",
        answer: "En Helpee (uppdragsgivare) är en person som använder sig utav Helpicon för att få hjälp med diverse tjänster.",
    },
    {
        question: "Kan jag lämna omdömen om Helpers?",
        answer: "Ja, efter avslutad tjänst kan du lämna ett omdöme och betygsätta Helpers. Detta hjälper andra användare att göra informerade val.",
    },
    {
        question: "Är Helpers bakgrundskontrollerade?",
        answer: "Alla våra barnvakter genomgår en noggrann bakgrundskontroll, inklusive utdrag ur belastningsregistret. Din trygghet är vår högsta prioritet. Alla andra Helpers är verifierade via BankID",
    },
    {
        question: "Är mina personuppgifter säkra hos er?",
        answer: "Ja, vi tar din integritet på största allvar. Alla personuppgifter hanteras enligt gällande dataskyddslagstiftning och vår integritetspolicy.",
    },
    {
        question: "Hur kontaktar jag kundsupport?",
        answer: "Du kan nå vår kundsupport direkt via appen eller genom att skicka ett e-postmeddelande till support@helpicon.se. Vi är här för att hjälpa dig!",
    },
    {
        question: "Kan jag använda RUT-avdrag för städning och barnpassning?",
        answer: "Ja, för tjänster som är berättigade till RUT-avdrag kan du utnyttja detta direkt genom appen. Beloppet dras automatiskt av på din faktura.",
    },
]

function FAQBox({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);
    const iconUrl = isOpen ? "../assets/faq-collapse.svg" : "../assets/faq-expand.svg";

    return (
      <div className="shadow-md rounded-xl bg-white">
          <button className="mr-6 mb-auto p-6 flex w-full gap-x-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <img src={iconUrl} className="w-4" alt=""/>
              <h4 className="text-xl font-semibold text-left">{question}</h4>
          </button>
          <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
              <p className="text-gray-600 pb-6 pr-6 pl-14">{answer}</p>
          </AnimateHeight>
      </div>
    );
}

export default function FAQ() {
    return (
      <div className="container mx-auto py-12 px-6">
          <h3 className="text-3xl lg:text-5xl font-semibold text-center">Vanliga frågor</h3>
          <div className="grid lg:grid-cols-2 gap-6 my-12">
              <div className="contents lg:block lg:space-y-6">
                  {FAQS.filter((e, i) => i % 2 === 0).map((faq, index) => (
                    <div key={index}>
                        <FAQBox key={index} question={faq.question} answer={faq.answer}/>
                    </div>
                  ))}
              </div>
              <div className="contents lg:block lg:space-y-6">
                  {FAQS.filter((e, i) => i % 2 === 1).map((faq, index) => (
                    <div key={index}>
                        <FAQBox key={index} question={faq.question} answer={faq.answer}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    );
}
