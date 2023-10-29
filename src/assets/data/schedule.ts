interface Schedule {
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
