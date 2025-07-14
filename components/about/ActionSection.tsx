import { MouseEvent, useState } from "react";

import { Phone, MessageCircle, Instagram, X } from "lucide-react";

const contacts = [
  {
    type: "phone",
    icon: Phone,
    label: "Телефон 1",
    value: "+380 63 318 63 63",
    action: () => window.open("tel:+380633186363", "_self"),
  },
  {
    type: "phone",
    icon: Phone,
    label: "Телефон 2",
    value: "+380 67 318 63 63",
    action: () => window.open("tel:+380673186363", "_self"),
  },
  {
    type: "telegram",
    icon: MessageCircle,
    label: "Telegram",
    value: "@carlux_usa",
    action: () => window.open("https://t.me/carlux_usa", "_blank"),
  },
  {
    type: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@carlux.ukraine",
    action: () =>
      window.open(
        "https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl",
        "_blank"
      ),
  },
];

export default function ActionSection() {
  const [showContacts, setShowContacts] = useState(false);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowContacts(false);
    }
  };

  const onClick = () => {
    console.log("hi");
    setShowContacts(true);
  };

  return (
    <>
      <div className="mt-12 lg:mt-16 text-center">
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-8 lg:p-10 max-w-5xl mx-auto">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-montserrat">
            Готові знайти транспорт своєї мрії?
          </h3>
          <p className="text-gray-300 font-kelly-slab mb-6 max-[800px] mx-auto">
            Залиште заявку, і наш експерт проконсультує вас безкоштовно. Разом
            знайдемо ідеальний варіант саме для вас!
          </p>

          <button
            onClick={onClick}
            className=" bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            Безкоштовна консультація
          </button>
        </div>
      </div>

      {showContacts && (
        <div
          className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
          onClick={(e) => {
            handleBackdropClick(e);
          }}
        >
          <div
            className="bg-gray-900 rounded-2xl p-6 w-full max-w-md relative border border-orange-400/20 shadow-[0_0_30px_rgba(270,160,30,0.5)] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContacts(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <h4 className="text-xl font-bold text-white mb-6 text-center pr-8">
              Оберіть зручний спосіб зв&apos;язку
            </h4>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => {
                    contact.action();
                    setShowContacts(false);
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700 hover:border-orange-500/30"
                >
                  <contact.icon
                    size={24}
                    className={`${
                      contact.type === "telegram"
                        ? "text-blue-400"
                        : contact.type === "instagram"
                        ? "text-pink-400"
                        : "text-green-400"
                    }`}
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      {contact.label}
                    </div>
                    <div className="text-gray-400 text-sm">{contact.value}</div>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-gray-400 text-sm text-center mt-6">
              Працюємо щодня з 10:00 до 21:00
            </p>
          </div>
        </div>
      )}
    </>
  );
}
