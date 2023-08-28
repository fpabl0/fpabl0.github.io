import { useEffect, useState } from "react";
import NextLink from 'next/link';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";

import { LangSelector } from "./LangSelector";
import { MobileLangSelector } from "./MobileLangSelector";
import { Dict } from "@/get-dictionary";
import { AppItemMenuContainer } from "./AppItemMenuContainer";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

const drawerWidth = 240;

const viewsLinks: (keyof Dict["navbar"])[] = [
  "about",
  "skills",
  "experience",
  "contact",
];

type Props = {
  curLocale?: string;
  dict: Dict['navbar'];
};

export const NavDrawer = ({ curLocale = "", dict }: Props) => {

  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    for (const l of viewsLinks) {
      if (router.asPath.includes(`#${l}`)) {
        setSelectedLink(l);
        return;
      }
    }
  }, [router.asPath]);

  const onOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{
          display: "flex",
          justifyContent: 'space-between'
        }}>

          <NextLink href={`/${curLocale}`} passHref legacyBehavior>
            <Link sx={{ ml: 0.5 }} display="flex" alignItems="center" flexDirection="row" underline="none">
              <Logo />
            </Link>
          </NextLink>

          <Box sx={{
            display: { xs: 'none', md: 'flex' }
          }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent='end'
              alignItems='center'
              flex={1}
              mr={3}
            >
              {
                viewsLinks.map((l) => (
                  <NextLink key={`desktop-link-${l}`} href={`#${l}`} scroll={false} passHref legacyBehavior>
                    <Link underline="none" color="whitesmoke">
                      <AppItemMenuContainer
                        selected={selectedLink === l}
                        sx={{ color: undefined }}
                      >
                        {dict[l]}
                      </AppItemMenuContainer>
                    </Link>
                  </NextLink>
                ))
              }
            </Box>
            <LangSelector />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={onOpenDrawer}
            sx={{ mr: 0.5, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <MobileDrawer dict={dict} isDrawerOpen={isDrawerOpen} onCloseDrawer={onCloseDrawer} />
    </>
  );
};

type DrawerProps = {
  dict: Dict['navbar'];
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
};

const MobileDrawer = ({ dict, isDrawerOpen, onCloseDrawer }: DrawerProps) => {

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <NextLink href="/" passHref legacyBehavior>
        <Link display="flex" justifyContent="center" alignItems="center" flexDirection="row" underline="none">
          <Box my={1} display="flex" justifyContent="center" alignItems="center">
            <Logo />
          </Box>
        </Link>
      </NextLink>
      <Divider />
      <List onClick={onCloseDrawer} sx={{ mb: 1 }}>
        {viewsLinks.map((l) => (
          <NextLink key={`mobile-link-${l}`} href={`#${l}`} scroll={false} passHref legacyBehavior>
            <Link underline="none" color="whitesmoke">
              <ListItemButton>
                <ListItemText primary={dict[l]} />
              </ListItemButton>
            </Link>
          </NextLink>
        ))}
      </List>
      <MobileLangSelector label={dict.label_languages} onLangSelected={onCloseDrawer} />
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={onCloseDrawer}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );

};
