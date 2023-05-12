import {
  DollarDownArrow,
  Ellipse25_17,
  Ellipse70,
  EscrowIcon,
  JuryIcon,
  LinkIcon,
  SmartContractIcon,
} from "../assets";

import { WalthroughInterface } from "../interfaces/walkthrough";
import { ProblemsInterface } from "../interfaces/currentSystemProblems";

export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "uses",
    title: "Uses",
  },
  // {
  //   id: "demo",
  //   title: "Demo",
  // },
];

export const currentSystemProblems: ProblemsInterface[] = [
  {
    id: "70%nonPayment",
    image: Ellipse70,
    description: {
      main: "70% of freelancers have experienced nonpayment or late payment at some point",
      footer: "study by the Freelancers Union",
    },
  },
  {
    id: "$5985Loss",
    image: DollarDownArrow,
    description: {
      main: "An Average freelancer loses $5,968 per year due to nonpayment or late payment",
      footer: "study by the Freelancers Union",
    },
  },
  {
    id: "25%-17%Scam",
    image: Ellipse25_17,
    description: {
      main: "25% freelancers and 17% clients reported that they had been scammed",
      footer: "Report by freelancer.com 2019",
    },
  },
];

export const walkthrough: WalthroughInterface[] = [
  {
    id: "walkthrough-1",
    description:
      "Clients easily create custom smart contracts with the lancer’s wallet address",
  },
  {
    id: "walkthrough-2",
    description: "Lancer reviews and signs the contract",
  },
  {
    id: "walkthrough-3",
    description:
      "Client sends the amount to an Escrow account mutually owned by lancer and Client",
  },
  {
    id: "walkthrough-4",
    description: "Auto payment to lancer on completing the task",
  },
  {
    id: "walkthrough-5",
    description:
      "Fair dispute resolution by neutral  third party using Kleros, if there is any",
  },
];

export const features = [
  {
    id: "Escrow",
    title: "Escrow",
    image: EscrowIcon,
    description:
      "Qubepay will hold the hiring company’s money until the company get satisfied with the work and pay the freelancer ",
  },
  {
    id: "Arbitration",
    title: "Arbitration",
    image: JuryIcon,
    description:
      "If there is any disagreement between the hiring party and lancers, we will provide dispute resolution",
  },
  {
    id: "LinkBased",
    title: "Link based",
    image: LinkIcon,
    description:
      "Generate a direct link of a contract describing the project and its payment details to share on any platform",
  },
  {
    id: "SmartContract",
    title: "Smart Contract",
    image: SmartContractIcon,
    description:
      "Qubepay has a protocol stored in the blockchain. Thus it's transparent and trustworthy. No middleman is involved.",
  },
];

export const footerLinks = [
  {
    id: "privacy_policy",
    title: "Privacy Policy",
    link: "https://veroo.notion.site/Privacy-Policy-4538184bcaee4835a2dedcc464496cdd",
  },
  {
    id: "terms_7_conditions",
    title: "Terms & Conditions",
    link: "https://veroo.notion.site/Terms-and-Conditions-e56f60533a834abbbd1213c6bf0cd36f",
  },
  {
    id: "2023_QubePay_org",
    title: "© 2023 QubePay org",
    link: "/",
  },
];

export const aesthetics = {
  glow: {
    introSectionGlowStyles: [
      "bg-[#2563EB] top-[13%] right-[7%] w-[153px] h-[153px] blur-[150px]",
      "bg-[#00FFFF] top-[55%] right-[17%] w-[153px] h-[153px] blur-[150px]",
      "bg-[#2563EB] bottom-[9%] left-[5%] w-[153px] h-[153px] blur-[150px]",
    ],
    currentSystemProblemsStyles: [
      "bg-[#2563EB] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[153px] h-[153px] blur-[150px]",
    ],
    walkthroughGlowStyles: [
      "bg-[#00FFFF] w-[306px] h-[306px] blur-[300px] top-[25%] -left-[5%]",
      "bg-[#00FFFF] w-[306px] h-[306px] blur-[300px] top-[50%] right-0",
      "bg-[#2563EB] w-[306px] h-[306px] blur-[300px] top-[60%] left-1/2",
    ],
    featuresGlowStyles: [
      "bg-[#00FFFF] w-[90px] h-[90px] blur-[300px] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      "bg-[#00FFFF] w-[90px] h-[90px] blur-[300px] top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      "bg-[#2563EB] w-[180px] h-[180px] blur-[300px] top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      "bg-[#2563EB] w-[180px] h-[180px] blur-[300px] top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    ],
  },
};
