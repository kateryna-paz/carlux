import { FaCar, FaUsers, FaGlobe, FaAward } from "react-icons/fa";

export const stats = [
  {
    icon: FaCar,
    number: "6 000+",
    label: "Доставлено авто",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: FaUsers,
    number: "5 000+",
    label: "Задоволених клієнтів",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: FaGlobe,
    number: "8+",
    label: "Країн-партнерів",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: FaAward,
    number: `${new Date().getFullYear() - 2015}+`,
    label: "Років досвіду",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
];
