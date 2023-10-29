/* Nav Data */

export const navData = [
  { name: "الرئيسية 👾", href: "#home" },
  { name: "المتحدثين 📣", href: "#speakers" },
  { name: "الجدول  🗓", href: "#schedule" },
  { name: "الأسئلة الشائعة 🤔", href: "#faq" },
];

/* Speakers Images & Data */
import ZeyadKurdi from "@assets/images/speakers/Zeyad Kurdi.jpg";
import MoazAbuShaqiyyah from "@assets/images/speakers/Moaz Abu Shaqiyyah.png";
import AnasBakhsh from "@assets/images/speakers/Anas Bakhsh.jpeg";
import MohammadAltayyar from "@assets/images/speakers/Mohammad Altayyar.jpg";
import HindAlBeayez from "@assets/images/speakers/Hind Al-Beayez.jpeg";
import TalalAlTurki from "@assets/images/speakers/Talal Al-Turki.jpeg";
import ElhamAlOmran from "@assets/images/speakers/Elham Al-Omran.jpeg";

export const speakers = [
  {
    name: "زياد فهد كردي",
    background: "SasoriSoft Founder & Former Developer in Japan",
    image: ZeyadKurdi,
  },
  {
    name: "معاذ أبو شيقه",
    background: "Co-Founder & Creative Director at AstraValle Studio",
    image: MoazAbuShaqiyyah,
  },
  {
    name: "أنس بخش",
    background: "Co-Founder & CTO at Ash Games Studio",
    image: AnasBakhsh,
  },
  {
    name: "محمد طيار",
    background: "Game Developer & Content Creator",
    image: MohammadAltayyar,
  },
  {
    name: "هند البعيز",
    background: "Game UI/UX Designer at Steer Studios",
    image: HindAlBeayez,
  },
  {
    name: "طلال التركي",
    background: "Game Design at Steer Studios",
    image: TalalAlTurki,
  },
  {
    name: "إلهام عمران",
    background: "Game UI/UX Designer at Steer Studios",
    image: ElhamAlOmran,
  },
];

export interface Schedule {
  [dayOfWeek: string]: { name: string; time: string }[];
}

export const schedule: Schedule[] = [
  {
    الخميس: [
      {
        name: "مقدمة في تطوير اللعبة",

        time: "4:00 pm - 5:00 pm",
      },
      {
        name: "مقدمة في تصميم الألعاب",

        time: "5:00 pm - 6:15 pm",
      },
      { name: "استراحة أكل", time: "6:15 pm - 6:45 pm" },
      { name: "تصميم المراحل", time: "6:45 pm - 8:00 pm" },
    ],
  },
  {
    الجمعة: [
      {
        name: "مقدمة في الفنون ثنائية الأبعاد",

        time: "4:00 pm - 5:00 pm",
      },
      {
        name: "تطوير الألعاب ثنائية الأبعاد باستخدام Unity",

        time: "5:00 pm - 6:30 pm",
      },
      { name: "استراحة أكل", time: "6:30 pm - 7:00 pm" },

      {
        name: "مقدمة في الفنون ثلاثية الأبعاد",

        time: "7:00 pm - 8:00 am",
      },
    ],
  },
  {
    السبت: [
      {
        name: "تصميم حركة الشخصيات",

        time: "4:00 pm - 5:00 pm",
      },
      {
        name: "تطوير الألعاب ثلاثية الأبعاد باستخدام Unity",

        time: "5:00 pm - 6:30 pm",
      },
      { name: "استراحة أكل", time: "6:30 pm - 7:00 pm" },
      { name: "واجهة المستخدم", time: "7:00 pm - 8:00 pm" },
    ],
  },
];

export const faqData = [
  {
    question: "من يمكنه المشاركة في المعسكر؟",
    answer: "أي شخص مهتم بتعلم تطوير الألعاب!",
  },
  {
    question: "ما الذي سأتعلمه في المعسكر؟",
    answer: "تصميم الألعاب وبرمجتها من خلال ورش عمل مثرية.",
  },
  {
    question: "هل يجب أن يكون لدي خبرة لحضور المعسكر؟",
    answer: "لا تحتاج إلى أي خبرة سابقة؛ البرنامج مصمم للمبتدئين.",
  },
  {
    question: "ما الذي أحتاج إلى اصطحابه معي للمعسكر؟",
    answer: "جهاز كمبيوتر محمول شخصي وبرنامج يونيتي مثبت مسبقًا.",
  },
];
