import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import LanguageIcon from '@mui/icons-material/Language';

import { Lang, i18n } from "@/i18n-config";
import { AppItemMenuContainer } from "./AppItemMenuContainer";

export const LangSelector = () => {

  const router = useRouter();
  const [curLang, setCurLang] = useState(i18n.defaultLanguage);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    for (const l of i18n.languages) {
      if (router.asPath.startsWith(`/${l.locale}`)) {
        setCurLang(l);
        return;
      }
    }
  }, [router.asPath]);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onLangSelect = (lang: Lang) => {
    setAnchorEl(null);
    const prevLang = curLang;
    setCurLang(lang);
    const newPath = router.asPath.replace(prevLang.locale, lang.locale);
    setTimeout(() => {
      router.replace(newPath);
    }, 200);
  };

  return (
    <>
      <Button
        aria-describedby="lang-selector"
        variant="text"
        onClick={onClick}
        startIcon={<LanguageIcon />}
        sx={{
          textTransform: 'none',
        }}
      >
        {curLang.name}
      </Button>
      <Menu
        id="lang-selector"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        MenuListProps={{
          'aria-labelledby': 'lang-selector',
        }}
      >
        {
          i18n.languages.map((l) => (
            <AppItemMenuContainer
              key={`lang-${l.name}`}
              selected={curLang.locale === l.locale}
              onClick={() => onLangSelect(l)}
            >
              {l.name}
            </AppItemMenuContainer>
          ))
        }
      </Menu>
    </>
  );
};