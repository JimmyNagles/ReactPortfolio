import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";

function NavMobil() {
  return (
    <div>
      <Navbar
        className="black white-text"
        alignLinks="left"
        brand={
          <a className="brand-logo center" href="/">
            JN
          </a>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="/">Home</NavItem>
        <NavItem href="/About">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Navbar>
    </div>
  );
}

export default NavMobil;
