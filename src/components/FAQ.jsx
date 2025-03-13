import {useState} from "react";
import AnimateHeight from 'react-animate-height';

const FAQS = [
    {
        question: "What is a Helpee?",
        answer: "Helpee' refers to someone who is being helped or assisted",
    },
    {
        question: "What is a Helper?",
        answer: "Helper' refers to someone who is providing help or assistance",
    },
    {
        question: "How do I become a Helper?",
        answer: "You can become a helper by signing up on our platform and completing the required training",
    },
    {
        question: "How do I become a Helpee?",
        answer: "You can become a helpee by signing up on our platform and requesting help",
    },
    {
        question: "What is the cost of using the platform?",
        answer: "Our platform is free to use for both Helpees and Helpers",
    },
    {
        question: "How do I request help?",
        answer: "You can request help by signing up on our platform and posting a request",
    },
    {
        question: "How do I provide help?",
        answer: "You can provide help by signing up on our platform and responding to requests",
    },
    {
        question: "How do I report a user?",
        answer: "You can report a user by contacting our support team",
    },
]

function FAQBox({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);
    const iconUrl = isOpen ? "../assets/faq-collapse.svg" : "../assets/faq-expand.svg";

    return (
      <div className="shadow-md rounded-xl bg-white">
          <button className="mr-6 mb-auto p-6 flex w-full gap-x-4" onClick={() => setIsOpen(!isOpen)}>
              <img src={iconUrl} className="w-4" alt=""/>
              <h4 className="text-xl font-semibold">{question}</h4>
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
          <h3 className="text-3xl lg:text-5xl font-semibold text-center">Frequently Ask Questions</h3>
          <div className="grid lg:grid-cols-2 gap-6 my-12">
              <div className="contents lg:block lg:space-y-6">
                  {FAQS.filter((e, i) => i % 2 === 0).map((faq, index) => (
                    <div>
                        <FAQBox key={index} question={faq.question} answer={faq.answer}/>
                    </div>
                  ))}
              </div>
              <div className="contents lg:block lg:space-y-6">
                  {FAQS.filter((e, i) => i % 2 === 1).map((faq, index) => (
                    <div>
                        <FAQBox key={index} question={faq.question} answer={faq.answer}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    );
}
