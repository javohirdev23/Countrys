import React from "react";
import "./navbar.css";
import { ColorModeButton, useColorMode } from "../ui/color-mode";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="navcont">
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div>
        <ColorModeButton />
      </div>
    </div>
  );
}
