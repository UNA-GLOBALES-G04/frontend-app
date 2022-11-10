import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../../shared/hooks";

import { Heading, Text } from "@chakra-ui/react";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const Schedule = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <div>
      <Heading>Reserva tu espacio</Heading>
      Aqui va el horario
    </div>
  );
};

export default Schedule;
