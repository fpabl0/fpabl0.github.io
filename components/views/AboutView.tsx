import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import MePhoto from '../../public/images/me.png';

import { SectionTitle } from "../ui/SectionTitle";
import { Dict } from "@/get-dictionary";

const mePhotoHeight = 410;

type Props = {
  id?: string;
  dict: Dict['about_view'];
};

export const AboutView = ({ id, dict }: Props) => {
  return (
    <Box id={id} minHeight="100vh" display="flex" flexDirection="column">
      <Toolbar />
      <Box
        display="flex"
        flex={1}
        p={2}
      >
        <Card sx={{ width: "100%", borderRadius: "25px" }}>
          <CardContent sx={{
            display: "flex", alignItems: "center", height: "100%", p: "0 !important",
          }}>

            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              m={0}
              width="100%"
              height="100%"
            >
              <Grid item xs={12} md={6} textAlign="center" p="32px">
                <SectionTitle title={dict.section} />
                <Typography variant="h6" component="h2" mt={1} mb={2} fontStyle='italic'>
                  {dict.title}
                </Typography>
                {
                  dict.body.map((s, index) => (
                    <Typography key={`about-view-body-${index}`} mt={1}>{s}</Typography>
                  ))
                }
              </Grid>
              <Grid item xs={12} md={6}
                p="0 !important"
                sx={{ height: { xs: `${mePhotoHeight}px`, md: "100%" } }}
                display="flex"
                flexDirection="column"
                justifyContent="end"
                alignItems="center"
              >
                <Image
                  src={MePhoto}
                  alt="Pablo Fuentes"
                  height={mePhotoHeight}
                />
              </Grid>
            </Grid>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
};