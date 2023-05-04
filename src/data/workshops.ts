export interface Schedule {
  [dayOfWeek: string]: { name: string; time: string }[];
}

export const schedule: Schedule[] = [
  {
    Saturday: [
      { name: "About game camp", time: "9:00 pm - 9:10 pm" },
      { name: "Intro to game development", time: "9:10 pm - 9:50 pm" },
      { name: "Break", time: "9:50 pm - 10:00 pm" },
      { name: "Intro to game design", time: "10:00 pm - 10:40 pm" },
      { name: "Level design", time: "10:40 pm - 11:10 pm" },
      { name: "Branistorming", time: "11:10 pm - 12:00 am" },
    ],
  },
  {
    Sunday: [
      {
        name: "Unity and 2D games development",
        time: "9:00 pm - 9:50 pm",
      },
      { name: "Break", time: "9:50 pm - 10:00 pm" },
      { name: "Intro to 2D art", time: "10:00 pm - 10:30 pm" },
      {
        name: "Movement and motion of characters design",
        time: "10:30 pm - 11:10 pm",
      },
      { name: "Intro to 3D art", time: "11:10 pm - 11:40 pm" },
      { name: "Game development", time: "11:40 pm - 12:00 am" },
    ],
  },
  {
    Monday: [
      {
        name: "Unity and 3D games development",
        time: "9:00 pm - 9:50 pm",
      },
      { name: "Break", time: "9:50 pm - 10:00 pm" },
      { name: "UI in unity", time: "10:00 pm - 10:30 pm" },
      { name: "Culture in games", time: "10:30 pm - 11:00 pm" },
      { name: "Intro to multiplayer", time: "11:00 pm - 11:30 pm" },
      { name: "Game development", time: "11:30 pm - 12:00 am" },
    ],
  },
  {
    Tuesday: [
      { name: "Game development", time: "9:00 pm - 9:50 pm" },
      { name: "Break", time: "9:50 pm - 10:00 pm" },
      { name: "Game development", time: "10:00 pm - 12:00 am" },
    ],
  },
  {
    Wednesday: [
      { name: "Game development", time: "9:00 pm - 9:50 pm" },
      { name: "Break", time: "9:50 pm - 10:00 pm" },
      { name: "Game development", time: "10:00 pm - 12:00 am" },
    ],
  },
  {
    Thursday: [
      { name: "Present The Games", time: "" },
      { name: "Sponsor Word", time: "" },
      { name: "Game Test and Evaluation", time: "" },
      { name: "Certificates and Awards Ceremony", time: "" },
    ],
  },
];
