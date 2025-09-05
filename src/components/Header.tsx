import { Favicon } from "@/assets/default.exports";
import { Close, GitHub, Instagram, LinkedIn, Menu } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

type Menu = {
  id: number;
  title: string;
  link: string;
};

const Header = () => {
  const [menu, setMenu] = React.useState<Menu[]>();
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleSectionNavigation = (item: Menu) => {
    const location: any = window.location;
    const url = new URL(location);
    url.searchParams.set("focus", item.link);
    window.history.pushState(null, "", url.toString());
    const focus: any = url.searchParams.get("focus");

    let section: any = document.querySelector(focus ? focus : item.link);
    window.scrollTo({
      left: 0,
      top: section.offsetTop - 80
    });
  };

  React.useEffect(() => {
    setMenu([
      {
        id: 0,
        title: "Home",
        link: "#home"
      },
      {
        id: 1,
        title: "Projects",
        link: "#projects"
      },
      {
        id: 2,
        title: "Skills",
        link: "#skills"
      },
      {
        id: 3,
        title: "Services",
        link: "#services"
      },
      {
        id: 4,
        title: "Contact",
        link: "#contact"
      }
    ]);
  }, []);

  return (
    <nav className="h-[80px]">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-xl z-10">
        <div className="pf-container h-[80px] flex items-center">
          <div className="flex items-center flex-1">
            <Link
              href={""}
              className="logo-container flex items-center gap-[5px]"
            >
              <Image
                src={Favicon}
                height={80}
                width={80}
                alt={" Nazmeen Khan logo"}
              />
              <Typography variant="h5" fontWeight={"600"} className="ml-2">
                Nazmeen Khan
              </Typography>
            </Link>
            <div className="items-center justify-between flex-1 lg:flex hidden">
              <ul className="flex items-center px-10">
                {menu &&
                  menu.map((item) => (
                    <li key={item.id}>
                      <ListItemButton
                        className="text-gray-400 hover:text-gray-100 transition-all"
                        onClick={() => {
                          handleSectionNavigation(item);
                        }}
                      >
                        {item.title}
                      </ListItemButton>
                    </li>
                  ))}
              </ul>
              <ul className="flex items-center justify-center gap-[5px]">
                <li>
                  <IconButton
                    size="large"
                    LinkComponent={"a"}
                    href="https://www.linkedin.com/in/nazmeen-khan-853779242/"
                    target={"_blank"}
                  >
                    <LinkedIn className="text-white" fontSize="medium" />
                  </IconButton>
                </li>
                {/* <li>
                  <IconButton
                    size="large"
                    LinkComponent={"a"}
                    href="https://github.com/karancodex"
                    target={"_blank"}
                  >
                    <GitHub className="text-white" fontSize="medium" />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    size="large"
                    LinkComponent={"a"}
                    href="https://www.instagram.com/mauryawansikaran/"
                    target={"_blank"}
                  >
                    <Instagram className="text-white" fontSize="medium" />
                  </IconButton>
                </li> */}
              </ul>
            </div>
            <div className="items-center justify-end flex-row flex-1 lg:hidden flex">
              <IconButton size="large" onClick={handleMenuToggle}>
                {isMenuVisible ? (
                  <Close className="text-white" fontSize="medium" />
                ) : (
                  <Menu className="text-white" fontSize="medium" />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`${
          isMenuVisible && "pf-sidebar-visible"
        } pf-sidebar fixed top-0 left-0 bottom-0 h-[100vh] w-[280px] bg-pf-dark-med z-20`}
      >
        <List>
          {menu &&
            menu.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleSectionNavigation(item);
                    handleMenuToggle();
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <ul className="flex  gap-[5px]">
          <li>
            <IconButton
              size="large"
              LinkComponent={"a"}
              href="https://www.linkedin.com/in/nazmeen-khan-853779242/"
              target={"_blank"}
            >
              <LinkedIn className="text-white" fontSize="medium" />
            </IconButton>
          </li>
          {/* <li>
            <IconButton
              size="large"
              LinkComponent={"a"}
              href="https://github.com/karancodex"
              target={"_blank"}
            >
              <GitHub className="text-white" fontSize="medium" />
            </IconButton>
          </li>
          <li>
            <IconButton
              size="large"
              LinkComponent={"a"}
              href="https://www.instagram.com/mauryawansikaran/"
              target={"_blank"}
            >
              <Instagram className="text-white" fontSize="medium" />
            </IconButton>
          </li> */}
        </ul>
      </div>
      {isMenuVisible && (
        <div
          onClick={handleMenuToggle}
          className={`pf-sidebar-overlay fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50`}
        ></div>
      )}
    </nav>
  );
};

export default Header;
