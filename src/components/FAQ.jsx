import {useState} from "react";
import AnimateHeight from 'react-animate-height';

import faqExpand from '../assets/faq-expand.svg';
import faqCollapse from '../assets/faq-collapse.svg';

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
    const iconUrl = isOpen ? faqCollapse : faqExpand;

    return (
        <div className="shadow-md rounded-xl p-6 bg-white flex">
            <button className="mr-6 mb-auto h-8" onClick={() => setIsOpen(!isOpen)}>
                <img src={iconUrl} className="w-4" alt=""/>
            </button>
            <div>
                <h4 className="text-xl font-semibold">{question}</h4>
                <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
                    <p className="text-gray-600 mt-4">{answer}</p>
                </AnimateHeight>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="container mx-auto py-12 px-6">
            <h3 className="text-3xl lg:text-5xl font-semibold text-center">Frequently Ask Questions</h3>
            <div className="lg:grid lg:grid-cols-2 gap-6 my-12">
                {FAQS.map((faq, index) => (
                    <div>
                        <FAQBox key={index} question={faq.question} answer={faq.answer}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
