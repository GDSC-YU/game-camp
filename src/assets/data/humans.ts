import AnasBakhsh from "@assets/images/humans/Anas Bakhsh.jpeg";
import MoazAbuShaqiyyah from "@assets/images/humans/Moaz Abu Shaqiyyah.png";
import MuathAlHajjam from "@assets/images/humans/Muath Al-Hajjam.jpg";
import TalalAlTurki from "@assets/images/humans/Talal Al-Turki.jpeg";
import ThamerBabgi from "@assets/images/humans/Thamer Babgi.jpeg";
import ZeyadKurdi from "@assets/images/humans/Zeyad Kurdi.jpg";

interface Socials {
  x: string | null;
  github: string | null;
  instagram: string | null;
  linkedin: string | null;
  youtube: string | null;
  itch: string | null;
  medium: string | null;
  behance: string | null;
}

interface Speaker {
  name: string;
  background: string;
  image: ImageMetadata;
  socials: Socials;
}

export const speakers: Speaker[] = [
  {
    name: "أنس بخش",
    background: "Co-Founder & CTO at Ash Games Studio",
    image: AnasBakhsh,
    socials: {
      x: "https://x.com/ashgamesstudios",
      github: "https://github.com/djinn247",
      instagram: null,
      linkedin: "https://linkedin.com/in/anas-bakhsh-98012777",
      youtube: null,
      itch: "https://djinn247.itch.io",
      medium: null,
      behance: null,
    },
  },
  {
    name: "معاذ أبو شيقه",
    background: "Co-Founder & Creative Director at AstraValle Studio",
    image: MoazAbuShaqiyyah,
    socials: {
      x: "https://x.com/Mads_Space",
      github: null,
      instagram: null,
      linkedin: "https://linkedin.com/in/moath-abushayqah-4a399b1a8",
      youtube: null,
      itch: null,
      medium: null,
      behance: null,
    },
  },
  {
    name: "معاذ رياض الحجام",
    background: "Senior Art director & Animator at BDR Studio",
    image: MuathAlHajjam,
    socials: {
      x: null,
      github: null,
      instagram: "https://www.instagram.com/muath_alhajjam",
      linkedin: "https://www.linkedin.com/in/muaz-alhajjam-728661163",
      youtube: null,
      itch: null,
      medium: null,
      behance: "https://www.behance.net/moazal-hajjam1",
    },
  },
  {
    name: "طلال التركي",
    background: "Game Design & Computer Engineering",
    image: TalalAlTurki,
    socials: {
      x: "https://x.com/OG_Gemzer",
      github: "https://github.com/TalalMAlT",
      instagram: null,
      linkedin: "https://linkedin.com/in/talal-alturki",
      youtube: null,
      itch: "https://talalalt.itch.io",
      medium: null,
      behance: null,
    },
  },
  {
    name: "ثامر البابغي",
    background: "3D Artist & Animator at Steer Studios",
    image: ThamerBabgi,
    socials: {
      x: "https://x.com/thamerbabgi",
      github: null,
      instagram: "https://www.instagram.com/babgi",
      linkedin: "https://www.linkedin.com/in/thamer-babgi-95b264119",
      youtube: "https://www.youtube.com/@tbabgi",
      itch: null,
      medium: null,
      behance: null,
    },
  },
  {
    name: "زياد فهد كردي",
    background: "SasoriSoft Founder & Former Developer in Japan",
    image: ZeyadKurdi,
    socials: {
      x: null,
      github: null,
      instagram: null,
      linkedin: "http://linkedin.com/in/zeyad-kurdi",
      youtube: "https://youtube.com/watch?v=4GN-5Uk2E9E",
      itch: null,
      medium: null,
      behance: null,
    },
  },
];
