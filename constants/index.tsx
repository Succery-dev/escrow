// Assets Imports
import {
  DollarDownArrow,
  Ellipse25_17,
  Ellipse70,
  EscrowIcon,
  JuryIcon,
  LinkIcon,
  SmartContractIcon,
  One2one,
  Community,
  Api,
  Nft,
} from "../assets";

// Interfaces Imports
import {
  WalthroughInterface,
  ProblemsInterface,
  FeatureInterface,
} from "../interfaces";

// Types Imports
import { ProjectDetailsInterfaceKeysType } from "../types";

export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "walkthrough",
    title: "Walkthrough",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "support",
    title: "Support",
  }
];

export const currentSystemProblems: ProblemsInterface[] = [
  {
    id: "70%nonPayment",
    image: One2one,
    description: {
      main: "You can securely conduct transactions using Qube, even when dealing with anonymous individuals.",
      footer: "study by the Freelancers Union",
    },
  },
  {
    id: "$5985Loss",
    image: Community,
    description: {
      main: "Not only can Qube be used for one-on-one transactions, but it is also suitable for assigning tasks to community members.",
      footer: "study by the Freelancers Union",
    },
  },
  {
    id: "25%-17%Scam",
    image: Api,
    description: {
      main: "With Qube's developer tools, anyone will be able to easily build applications similar to Qube. (Coming soon)",
      footer: "Report by freelancer.com 2019",
    },
  },
];

export const walkthrough: WalthroughInterface[] = [
  {
    id: "walkthrough-1",
    description:
      "Clients easily create custom smart contracts with the freelancer’s wallet address",
  },
  {
    id: "walkthrough-2",
    description: "Freelancer reviews and signs the contract",
  },
  {
    id: "walkthrough-3",
    description:
      "Client sends the amount to an Escrow account mutually owned by freelancer and Client",
  },
  {
    id: "walkthrough-4",
    description: "Auto payment to freelancer on completing the task",
  },
  {
    id: "walkthrough-5",
    description:
      "Fair dispute resolution by neutral  third party using Kleros, if there is any",
  },
];

export const features: FeatureInterface[] = [
  {
    id: "Escrow",
    title: "Escrow",
    image: EscrowIcon,
    description:
      "Qube will hold the hiring company’s money until the company get satisfied with the work and pay the freelancer using smart contract",
  },
  {
    id: "Arbitration",
    title: "Arbitration",
    image: JuryIcon,
    description:
      "If there is any disagreement between the hiring party and freelancers, we will provide dispute resolution",
  },
  {
    id: "LinkBased",
    title: "Link based",
    image: LinkIcon,
    description:
      "Generate a direct link of a contract describing the project and its payment details to share on any platform",
  },
  {
    id: "NFTGateway",
    title: "NFT Gateway",
    image: Nft,
    description:
      "With the gateway function provided by nfts, only specific individuals, such as NFT holder, can undertake the tasks",
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
    id: "2023_SUCCERY_FZCO",
    title: "© 2023 SUCCERY FZCO",
    link: "/",
  },
];

export const support = [
  {
    id: "DJT",
    name: "doublejump.tokyo Inc.",
    image: "/djt.jpg",
    hp: "https://www.doublejump.tokyo/en",
  },
  {
    id: "gumi",
    name: "gumi Inc.",
    image: "/gumi.jpg",
    hp: "https://gu3.co.jp/en/",
  },
];

// export const aesthetics = {
//   glow: {
//     introSectionGlowStyles: [
//       "bg-[#2563EB] top-[13%] right-[7%] w-[153px] h-[153px] blur-[150px]",
//       "bg-[#00FFFF] top-[55%] right-[17%] w-[153px] h-[153px] blur-[150px]",
//       "bg-[#2563EB] bottom-[9%] left-[5%] w-[153px] h-[153px] blur-[150px]",
//     ],
//     currentSystemProblemsStyles: [
//       "bg-[#2563EB] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[153px] h-[153px] blur-[150px]",
//     ],
//     walkthroughGlowStyles: [
//       "bg-[#00FFFF] w-[306px] h-[306px] blur-[300px] top-[25%] -left-[5%]",
//       "bg-[#00FFFF] w-[306px] h-[306px] blur-[300px] top-[50%] right-0",
//       "bg-[#2563EB] w-[306px] h-[306px] blur-[300px] top-[60%] left-1/2",
//     ],
//     featuresGlowStyles: [
//       "bg-[#00FFFF] w-[90px] h-[90px] blur-[300px] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2",
//       "bg-[#00FFFF] w-[90px] h-[90px] blur-[300px] top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2",
//       "bg-[#2563EB] w-[180px] h-[180px] blur-[300px] top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2",
//       "bg-[#2563EB] w-[180px] h-[180px] blur-[300px] top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2",
//     ],
//   },
// };

export const aesthetics = {
  glow: {
    introSectionGlowStyles: [
      {
        backgroundColor: "#2563EB",
        top: "25%",
        right: "13%",
        width: "153px",
        height: "153px",
        filter: "blur(150px)",
      },

      {
        backgroundColor: "#2563EB",
        bottom: "17%",
        left: "14%",
        width: "153px",
        height: "153px",
        filter: "blur(150px)",
      },
      {
        backgroundColor: "#00FFFF",
        top: "55%",
        right: "20%",
        width: "153px",
        height: "153px",
        filter: "blur(150px)",
      },
    ],

    currentSystemProblemsStyles: [
      {
        backgroundColor: "#2563EB",
        top: "50%",
        left: "50%",
        width: "153px",
        height: "153px",
        filter: "blur(150px)",
        transform: "translate(-50%, -50%)",
      },
    ],

    walkthroughGlowStyles: [
      {
        backgroundColor: "#00FFFF",
        top: "25%",
        left: "-5%",
        width: "200px",
        height: "200px",
        filter: "blur(200px)",
      },
      {
        backgroundColor: "#00FFFF",
        top: "50%",
        right: "0%",
        width: "200px",
        height: "200px",
        filter: "blur(200px)",
      },
      {
        backgroundColor: "#2563EB",
        top: "60%",
        left: "50%",
        width: "200px",
        height: "200px",
        filter: "blur(200px)",
      },
    ],

    featuresGlowStyles: [
      {
        backgroundColor: "#00FFFF",
        top: "50%",
        left: "50%",
        width: "90px",
        height: "90px",
        filter: "blur(300px)",
        transform: "translate(-50%, -50%)",
      },
      {
        backgroundColor: "#00FFFF",
        top: "52%",
        left: "50%",
        width: "90px",
        height: "90px",
        filter: "blur(300px)",
        transform: "translate(-50%, -50%)",
      },
      {
        backgroundColor: "#2563EB",
        top: "49%",
        left: "50%",
        width: "200px",
        height: "200px",
        filter: "blur(300px)",
        transform: "translate(-50%, -50%)",
      },
      {
        backgroundColor: "#2563EB",
        top: "53%",
        left: "50%",
        width: "200px",
        height: "200px",
        filter: "blur(300px)",
        transform: "translate(-50%, -50%)",
      },
    ],
    mobileNavbarGlowStyles: [
      {
        backgroundColor: "#2563EB",
        bottom: "0%",
        left: "0%",
        width: "100px",
        height: "100px",
        filter: "blur(125px)",
      },
      {
        backgroundColor: "#00FFFF",
        top: "0%",
        right: "0%",
        width: "100px",
        height: "100px",
        filter: "blur(125px)",
      },
    ],
    dashboardGlowStyles: [
      {
        backgroundColor: "#00FFFF",
        bottom: "10%",
        left: "45%",
        width: "500px",
        height: "500px",
        filter: "blur(500px)",
      },
      {
        backgroundColor: "#2563EB",
        top: "5%",
        right: "55%",
        width: "500px",
        height: "500px",
        filter: "blur(500px)",
      },
    ],
  },
};

export const chartColors: string[] = [
  "#3E8EEC",
  "#FFAD4E",
  "#F1FF4E",
  "#91FF4E",
  "#FF634E",
];

export const projectDetailsInterfaceKeys: ProjectDetailsInterfaceKeysType = [
  "project",
  "deadline",
  "amount",
  "status",
];
