import { useState } from "react";
import { Navbar } from "./Navbar";

export const NavbarContainer = () => {
  const [isOpen, setOpen] = useState(false);

  return <Navbar isOpen={isOpen} setOpen={setOpen} />;
};
