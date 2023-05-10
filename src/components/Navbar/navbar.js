import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button, Box } from "@chakra-ui/react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [showlinks, setShowlinks] = useState(false);
  const openLink = () => {
    setShowlinks(true);
  };
  const closeLink = () => {
    setShowlinks(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">NewsHunt</div>
        <div className="links">
          <Link to="/">
            <Button colorScheme="telegram" variant="ghost">
              Top Headings
            </Button>
          </Link>
          <Link to="/business">
            <Button colorScheme="telegram" variant="ghost">
              Business
            </Button>
          </Link>
          <Link to="/sports">
            <Button colorScheme="telegram" variant="ghost">
              Sports
            </Button>
          </Link>
        </div>
        <div className="more" onClick={openLink}>
          <RiBarChartHorizontalLine className="more-icon" />
        </div>
      </div>

      {showlinks && (
        <div className="responsive-links">
          <GrClose className="close-icon" onClick={closeLink} />

          <Link to="/">
            <Button colorScheme="telegram" variant="ghost" onClick={closeLink}>
              Top Headings
            </Button>
          </Link>
          <Link to="/business">
            <Button colorScheme="telegram" variant="ghost" onClick={closeLink}>
              Business
            </Button>
          </Link>
          <Link to="/sports">
            <Button colorScheme="telegram" variant="ghost" onClick={closeLink}>
              Sports
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
