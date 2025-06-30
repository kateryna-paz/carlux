import WrapSection from "./WrapSection";
import { FaPhone, FaInstagram, FaClock } from "react-icons/fa";

function ContactsContent() {
  return (
    <WrapSection>
      <div className="max-w-2xl w-full flex flex-col items-center justify-center lg:py-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:space-x-12 space-y-8 lg:space-y-0">
          <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 py-12 rounded-lg shadow-xl w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left flex-grow">
            <p className="text-lg md:text-xl font-kelly-slab mb-6 text-gray-200">
              Ми завжди раді відповісти на ваші запитання та надати
              консультацію. Оберіть зручний для вас спосіб зв&apos;язку!
            </p>
            <div className="space-y-5 font-kelly-slab text-left w-full max-w-sm mx-auto">
              <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="text-orange-400 text-xl mr-4 flex-shrink-0" />
                <a
                  href="tel:+380673186363"
                  className="text-white hover:text-orange-300 transition-colors duration-300 text-base md:text-lg"
                >
                  +38 (067) 318 63 63
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="text-orange-400 text-xl mr-4 flex-shrink-0" />
                <a
                  href="tel:+380673186363"
                  className="text-white hover:text-orange-300 transition-colors duration-300 text-base md:text-lg"
                >
                  +38 (067) 318 63 63
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <FaInstagram className="text-orange-400 text-xl mr-4 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-300 transition-colors duration-300 text-base md:text-lg"
                >
                  @carlux.ukraine
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <FaClock className="text-orange-400 text-xl mr-4 flex-shrink-0" />
                <span className="text-white text-base md:text-lg">
                  Пн-Пт: 10:00 - 20:00
                  <br /> Сб: 10:00 - 15:00 <br />
                  Нд: Вихідний
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapSection>
  );
}

export default ContactsContent;
