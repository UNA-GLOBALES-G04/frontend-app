import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../../shared/hooks";

import {
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const Experience = () => {
  const { language, t, switchLanguage } = useTranslation();

  let jobs = [
    "10 años dedicandome a tiempo completo en distitas barberias del GAM",
  ];

  return (
    <div>
      <UnorderedList>
        {jobs.map((job, i) => {
          return <ListItem key={i}>{job}</ListItem>;
        })}
      </UnorderedList>
    </div>
  );
};

export default Experience;
