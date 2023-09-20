"use client";

import { useState } from "react";

const ClientComponent = ({ name }: { name: string }) => {
  const [p, setP] = useState(name);
  //   guarantee run as client
  console.log(p);
  return <div>{name}</div>;
};

export default ClientComponent;
