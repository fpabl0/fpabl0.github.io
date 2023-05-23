import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { SectionTitle } from "../ui/SectionTitle";

type Props = {
  id?: string;
  title: string;
};

export const ContactView = ({ id, title }: Props) => {
  return (
    <Box id={id}>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        m={6}
      >
        <SectionTitle title={title} />
        <Box
          width="330px"
          mt={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={1.5}
        >

          <Card sx={{ width: "100%" }}>
            <CardActionArea
              href="mailto:f.pablo1@hotmail.com"
              target="_blank"
              sx={{ display: "flex", flexDirection: "row", p: 2 }}
            >
              <EmailIcon color="primary" />
              <Typography mx={2} flex={1}>f.pablo1@hotmail.com</Typography>
              <ArrowForwardIosIcon color="primary" />
            </CardActionArea>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardActionArea
              href="https://wa.me/593983915924"
              target="_blank"
              sx={{ display: "flex", flexDirection: "row", p: 2 }}
            >
              <PhoneIcon color="primary" />
              <Typography mx={2} flex={1}>+593 983915924</Typography>
              <ArrowForwardIosIcon color="primary" />
            </CardActionArea>
          </Card>

          <Divider />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap="10px"
          >
            <IconButton href="https://github.com/fpabl0" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/fpabl0/" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};