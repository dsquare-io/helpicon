import {useState} from "react";
import AnimateHeight from "react-animate-height";

export default function FAQBox({question, answer}) {
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
