import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from "../../components/common/PageMeta";
import logo from '../../assets/logo.png';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 text-left flex items-center justify-between focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-xl font-medium text-white">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <div className="text-gray-400">{answer}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Do I need an NFT Access Card to play?",
      answer: "Yes, you need an NFT Access Card to access our gaming platform. These cards serve as your membership and give you full access to all games and features on our platform."
    },
    {
      question: "Can I play on mobile?",
      answer: "$BANANA can be claimed under the tab \"My Kongz\". Every Kong migration lets you claim a 300 $BANANA airdrop. If you own more than one Kong, migrate all first, so you can claim all $BANANA at once and save on gas fees. Click \"CLAIM\" and a transaction will pop up in Metamask that needs to be confirmed. Make sure to not cheap out on gas and do not spam the \"CLAIM\" button! Migrated CyberKongz each yield 10 $BANANA per day that can be claimed at any time."
    },
    {
      question: "Do I need an NFT Access Card to play?",
      answer: "Yes, you need an NFT Access Card to access our gaming platform. These cards serve as your membership and give you full access to all games and features on our platform."
    },
    {
      question: "Can I play on mobile?",
      answer: "Yes, our platform is fully optimized for mobile play. You can access all games and features from your smartphone or tablet through our responsive web application."
    },
    {
      question: "Do I need an NFT Access Card to play?",
      answer: "Yes, you need an NFT Access Card to access our gaming platform. These cards serve as your membership and give you full access to all games and features on our platform."
    },
    {
      question: "Can I play on mobile?",
      answer: "Yes, our platform is fully optimized for mobile play. You can access all games and features from your smartphone or tablet through our responsive web application."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageMeta
        title="FAQ | MultiGaming Platform"
        description="Frequently asked questions about our NFT gaming platform"
      />
      
      <div className="relative min-h-screen bg-black overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-lime-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation Bar */}
        <nav className="fixed top-0 right-0 left-0 z-20 flex justify-between px-[50px] pt-3 bg-black/20 backdrop-blur-sm border-b border-gray-400/30">
          {/* Logo */}
          <div className="flex items-center pb-3">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" width="159px" height="53px" />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mt-3">
            <Link to="/#about" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Who we are
            </Link>
            <Link to="/features" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Features
            </Link>
            <Link to="/roadmap" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Roadmap
            </Link>
            <Link to="/team" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Team
            </Link>
            <Link to="/faq" className="h-[50px] text-white border-b-2 border-lime-500 transition-all duration-300 text-xl pb-1">
              FAQ
            </Link>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center">
            <div className="hidden lg:flex items-center space-x-3">
              <Link 
                to="/dashboard" 
                className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Launch App
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-20 px-6 md:px-10 lg:px-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-lime-500 mb-4 tracking-wider">
              FAQ
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to the most common questions about our platform
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>

          {/* Discord Community Box */}
          <div className="max-w-4xl mx-auto mt-20 bg-lime-500 rounded-xl overflow-hidden">
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#000000"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-black">Discord</h2>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Be part of the community</h3>
                <p className="text-black text-lg max-w-md">
                  $BANANA can be claimed under the tab "My Kongz". Every Kong migration lets you claim a 300 $BANANA airdrop.
                </p>
              </div>
              <div>
                <a 
                  href="https://discord.gg/cryptooasis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Join Discord community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}