/* Nav Data */

export const navData = [
  { name: "الرئيسية 👾", href: "#home" },
  { name: "المتحدثين 💬", href: "#speakers" },
  { name: "الحكام والمستشارون 🧠", href: "#people" },
  { name: "الجدول  🔧", href: "#schedule" },
  { name: "الأسئلة الشائعة 🤔", href: "#faq" },
];

/* Logos Images & Data */

import dga from "@assets/images/logos/dga.png";
import gdsc from "@assets/images/logos/gdsc.png";
import playerOne from "@assets/images/logos/PlayerOne.png";
import saudiGN from "@assets/images/logos/SaudiGN.png";

export const logos = [
  {
    name: "GDSC Al-Yamamah Univirsity Logo",
    image: gdsc,
    href: "https://gdscyu.com/",
    bright: true,
  },
  {
    name: "Player One Logo",
    image: playerOne,
    href: "https://playeronegames.net/",
    bright: true,
  },
  {
    name: "Digital Game Association Logo",
    image: dga,
    href: "https://dga.sa/",
    bright: true,
  },
  {
    name: "SaudiGN Logo",
    image: saudiGN,
    href: "https://www.saudigamenews.com/en/",
  },
];

/* Speakers Images & Data */

import LaylaAlbabtain from "@assets/images/people/Layla Albabtain.png";
import MoazAbuShaqiyyah from "@assets/images/people/Moaz Abu Shaqiyyah.png";
import MohammadAltayyar from "@assets/images/people/Mohammad Altayyar.jpg";
import QusaiMohammad from "@assets/images/people/Qusai Mohammad.jpg";

export const speakers = [
  {
    name: "ليلى البابطين",
    position: "متحدثة",
    background: "المؤسس والمدير التنفيذي Player One",
    image: LaylaAlbabtain,
  },
  {
    name: "معاذ أبو شقيه",
    position: "متحدث",
    background: "مطور ألعاب في استوديو AstraValle",
    image: MoazAbuShaqiyyah,
  },
  {
    name: "محمد طيار",
    position: "متحدث",
    background: "صانع محتوى تطوير ألعاب إلكترونية",
    image: MohammadAltayyar,
  },

  {
    name: "قصي محمد",
    position: "متحدث",
    background: "شريك مؤسس استوديو Evolite",
    image: QusaiMohammad,
  },
];

/* Judges Images & Data */
import AbdullahAlhejji from "@assets/images/people/Abdullah Alhejji.jpg";
import IssamAlshahwan from "@assets/images/people/Issam Alshahwan.jpg";
import SaraAlsabeg from "@assets/images/people/Sara Al-Sabeg.jpeg";

export const judges = [
  {
    name: "عبدالله الحجي",
    position: "حكم",
    image: AbdullahAlhejji,
  },
  {
    name: "ليلى البابطين",
    position: "حكم",
    image: LaylaAlbabtain,
  },
  {
    name: "عصام الشهوان",
    position: "حكم",
    image: IssamAlshahwan,
  },
  {
    name: "سارة السابق",
    position: "حكم",
    image: SaraAlsabeg,
  },
];

/* Consultants Images & Data */
import AfrahBinJubair from "@assets/images/people/Afrah Bin Jubair.jpg";
import KawtharAlrumyan from "@assets/images/people/Kawthar Alrumyan.jpeg";
import RashidAlomari from "@assets/images/people/Rashid Alomari.jpg";
import SalmanAlmutairi from "@assets/images/people/Salman Almutairi.jpeg";
import TalalAlturki from "@assets/images/people/Talal Alturki.jpeg";

export const consultants = [
  {
    name: "أفراح بين جبير",
    position: "مستشارة",
    image: AfrahBinJubair,
  },
  {
    name: "كوثر الرميان",
    position: "مستشارة",
    image: KawtharAlrumyan,
  },
  {
    name: "راشد العمري",
    position: "مستشار",
    image: RashidAlomari,
  },
  {
    name: "سلمان المطيري",
    position: "مستشار",
    image: SalmanAlmutairi,
  },
  {
    name: "طلال التركي",
    position: "مستشار",
    image: TalalAlturki,
  },
];

export interface Schedule {
  [dayOfWeek: string]: { name: string; time: string }[];
}

export const schedule: Schedule[] = [
  {
    الأحد: [
      { name: "ما هو معسكر اللعبة؟", time: "5:00 pm - 5:10 pm" },
      { name: "مقدمة في تطوير اللعبة", time: "5:10 pm - 6:00 pm" },
      { name: "استراحة أكل", time: "6:00 pm - 6:30 pm" },
      { name: "مقدمة في تصميم الألعاب", time: "6:00 pm - 6:40 pm" },
      { name: "تصميم المراحل", time: "6:40 pm - 7:10 pm" },
      { name: "عصف ذهني", time: "7:10 pm - 8:00 am" },
    ],
  },
  {
    الاثنين: [
      {
        name: "مقدمة في الفنون ثنائية الأبعاد",
        time: "5:00 pm - 6:00 pm",
      },
      {
        name: "تطوير الألعاب ثنائية الأبعاد باستخدام Unity",
        time: "6:00 pm - 7:00 pm",
      },
      { name: "استراحة أكل", time: "7:00 pm - 7:30 pm" },
      { name: "تصميم حركة الشخصيات", time: "7:30 pm - 8:30 am" },
    ],
  },
  {
    الثلاثاء: [
      {
        name: "مقدمة في الفنون ثلاثية الأبعاد",
        time: "5:00 pm - 6:00 pm",
      },
      {
        name: "تطوير الألعاب ثلاثية الأبعاد باستخدام Unity",
        time: "6:00 pm - 7:00 pm",
      },
      { name: "استراحة أكل", time: "7:00 pm - 7:30 pm" },
      { name: "واجهة المستخدم", time: "7:30 pm - 8:00 pm" },
      { name: "شرح عن المسابقة ومساحة للأسئلة", time: "8:00 pm - 8:30 pm" },
    ],
  },
  {
    الأربعاء: [
      { name: "تطوير الألعاب", time: "4:30 pm - 6:00 pm" },
      { name: "استراحة أكل", time: "6:00 pm - 6:30 pm" },
      { name: "تطوير الألعاب", time: "6:30 pm - 8:30 pm" },
      { name: "تسليم الألعاب", time: "8:30 pm - 9:30 pm" },
    ],
  },
  {
    الخميس: [
      { name: "عرض الألعاب", time: "4:30 pm - 6:00 pm" },
      { name: "استراحة أكل", time: "6:00 pm - 6:30 pm" },
      { name: "وقت فراغ واختيار الفائزين", time: "6:30 pm - 7:30 pm" },
      { name: "تسليم الجوائز والشهادات", time: "7:30 pm - 8:30 pm" },
    ],
  },
];

export const faqData = [
  {
    question: "من يمكنه حضور معسكر الألعاب؟",
    answer: "أي شخص مهتم بتعلم تطوير الألعاب من طلبة جامعة اليمامة!",
  },
  {
    question: "ماذا سأتعلم في المعسكر؟",
    answer: "سوف تتعلم عن تصميم الألعاب وبرمجتها من خلال ورش عمل مثرية.",
  },
  {
    question: "هل أحتاج إلى خبرة سابقة للحضور؟",
    answer: "لا تحتاج إلى أي خبرة سابقة؛ البرنامج مصمم للمبتدئين.",
  },
  {
    question: "متى وأين سيعقد؟",
    answer: "لم نحدد بعد.",
  },
  {
    question: "كم سوف يكلف؟",
    answer: "لا شيء! سوف نوفر حتى الطعام والقهوة مجاناً.",
  },
];
