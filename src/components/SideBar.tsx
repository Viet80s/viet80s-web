import React from "react";
import { slide as Menu } from "react-burger-menu";
import { CalendarCheck, ShoppingBag, Star, Mails } from "lucide-react";

const Sidebar = () => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#F8C983",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#F8C983",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#F8C983",
      padding: "0em",
    },

    bmItem: {
      display: "flex",
      padding: "0.3em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Menu isOpen={false} right styles={styles}>
      <a id="about" className="menu-item" href="/about-us">
        About Us <Star className="ml-2" />
      </a>
      <a
        id="onlineShopping"
        className="menu-item"
        href="https://www.viet80sonline.co.uk/"
      >
        Click & Collect <ShoppingBag className="ml-2" />
      </a>
      <a
        id="booking"
        className="menu-item"
        href="https://www.viet80sonline.co.uk/s/appointments"
      >
        Book a Table <CalendarCheck className="ml-2" />
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact Us <Mails className="ml-2" />
      </a>
    </Menu>
  );
};

export default Sidebar;
