import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

import LanguageIcon from '@mui/icons-material/Language';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Lang, i18n } from "@/i18n-config";

type Props = {
  label: string;
  onLangSelected?: () => void;
};

export const MobileLangSelector = ({ label, onLangSelected }: Props) => {
  const router = useRouter();
  const [curLang, setCurLang] = useState(i18n.defaultLanguage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    for (const l of i18n.languages) {
      if (router.asPath.startsWith(`/${l.locale}`)) {
        setCurLang(l);
        return;
      }
    }
  }, [router.asPath]);

  const onClick = () => {
    setIsOpen(prev => !prev);
  };

  const onLangSelect = (lang: Lang) => {
    const prevLang = curLang;
    setCurLang(lang);
    setIsOpen(false);
    if (onLangSelected) {
      onLangSelected();
    }
    const newPath = router.asPath.replace(prevLang.locale, lang.locale);
    router.replace(newPath);
  };


  return (
    <>
      <ListItemButton onClick={onClick}>
        <LanguageIcon />
        <ListItemText sx={{ ml: 1 }}>
          {label}
        </ListItemText>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            i18n.languages.map((lang) => (
              <ListItemButton
                key={`mobile-lang-${lang.name}`}
                sx={{ pl: 4 }}
                selected={lang.locale === curLang.locale}
                onClick={() => onLangSelect(lang)}
              >
                <ListItemText primary={lang.name} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </>
  );
};