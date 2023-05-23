import React from "react";
import * as Bs from "react-icons/bs";

const Icon = ({ flagNationCode }: { flagNationCode: keyof typeof Bs }) => {
  const flag = React.createElement(Bs[flagNationCode]);
  return <>{flag}</>;
};

export default Icon;
