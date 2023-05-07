import generalLinks from "@/data/links";
import contractDeploymentLinks from "@/data/contractDeploymentLinks";
import media from "@/data/media";
import DAOhausv3 from "@/data/DAOhausv3";
import publichaus from "@/data/publichaus";
import DAOhausv2 from "@/data/DAOhausV2";

// Add more imports for each category file here

import tw from "tailwind-styled-components";
const categories = [
  {
    title: "DAOhaus V3",
    links: DAOhausv3,
  },
  {
    title: "Public HAUS",
    links: publichaus,
  },
  {
    title: "Development",
    links: generalLinks,
  },
  {
    title: "Media",
    links: media,
  },
  {
    title: " Factory Contract Deployments",
    links: contractDeploymentLinks,
  },
  {
    title: "DAOhaus V2",
    links: DAOhausv2,
  },
  // Add more categories here, following the same format
];

function LinkList() {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-center">{category.title}</h2>
          <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto mb-3">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-4">
                <TWListItemLink
                  className=""
                  href={link.url}
                  alt={link.title}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="text-3xl absolute left-0 top-0 bottom-0 pl-5 flex items-center">
                    {link.emoji}
                  </span>
                  <span>{link.title}</span>
                </TWListItemLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}


export default LinkList;

const TWListItemLink = tw.a`
  w-full block relative 
  py-4 pl-12 md:px-12
  bg-blue-400 hover:bg-transparent 
  border-2 border-yellow-500 rounded-3xl
  font-bold text-center text-black hover:text-yellow-500
  transition-colors duration-200 
`;
