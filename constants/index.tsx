import cardPropsInterface from "../interfaces/cardProps";

import freelancer from "../assets/freelancer.png";
import nftMarketing from "../assets/NftMarketing.png";
import dao from "../assets/Dao.png";

export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "use cases",
    title: "Use Cases",
  },
  {
    id: "demo",
    title: "Demo",
  },
];

export const productDescription = [
  {
    id: "Escrow",
    title: "Escrow",
    description:
      "Qubepay will hold the hiring company’s money until the company get satisfied with the work and pay the freelancer ",
  },
  {
    id: "DisputeResolution",
    title: "Dispute resolution",
    description:
      "If there is any disagreement between hiring party and lancers, we will provide dispute resolution",
  },
  {
    id: "LinkBased",
    title: "Link based",
    description:
      "Generate direct link of a contract describing project and it’s payment details to share in any platform",
  },
  {
    id: "SmartContract",
    title: "Smart Contract",
    description:
      "Qubepay has protocol stored in blockchain. Thus its transparent, trustworthy.No middle man is involved.",
  },
];

export const useCases = [
  {
    id: "freelancer",
    title: "freelancer",
    image: freelancer,
  },
  {
    id: "nftMarketing",
    title: "Nft Marketing",
    image: nftMarketing,
  },
  {
    id: "dao",
    title: "DAO",
    image: dao,
  },
];

export const footerLinks = [
  {
    id: "company",
    title: "Company",
    links: ["About", "Pledge", "Principles", "Carrer"],
  },
  {
    id: "platform",
    title: "Platform",
    links: ["Web3", "NFT", "Principles", "Carrer"],
  },
  {
    id: "resources",
    title: "Resources",
    links: ["Help Center", "DAO", "Freelancers", "Wallet"],
  },
  {
    id: "partnerWithUs",
    title: "Partner with us",
    links: ["AAAAAA"],
  },
];
