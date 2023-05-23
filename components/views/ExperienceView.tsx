import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { SectionTitle } from "../ui/SectionTitle";
import { Dict } from "@/get-dictionary";

type Props = {
  id?: string;
  dict: Dict["experience_view"],
};

export const ExperienceView = ({ id, dict }: Props) => {
  return (
    <Box id={id}>
      <Toolbar />
      <Box m={2}>
        <SectionTitle title={dict.section} />
        <Grid mt={2} spacing={3} container>
          {
            dict.jobs.map((job, index) => (
              <Grid key={`job-${index}`} xs={12} md={6} item>
                <Card sx={{ height: "100%" }}>
                  <CardHeader
                    title={job.title}
                    subheader={
                      <>
                        <Typography>{job.company}</Typography>
                        <Typography>{job.date_range}{job.place !== "" ? ` / ${job.place}` : ''}</Typography>
                      </>
                    }
                  />
                  <CardMedia
                    component="img"
                    height={200}
                    image={job.image}
                  />
                  <CardContent>
                    {
                      job.details.map((d, index2) => (
                        <Typography key={`job-${index}-p-${index2}`} component="li">
                          {d}
                        </Typography>
                      ))
                    }
                  </CardContent>
                  <CardActions sx={{
                    display: "flex",
                    gap: { xs: "1px", sm: "10px" }
                  }}>
                    {
                      job.google_play_url && (
                        <GooglePlayButton url={job.google_play_url} />
                      )
                    }
                    {
                      job.app_store_url && (
                        <AppStoreButton url={job.app_store_url} />
                      )
                    }
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
};

const GooglePlayButton = ({ url }: { url: string; }) => {
  return (
    <a href={url} target="_blank" className="market-btn" role="button">
      <img src="svgs/google-play.svg" alt="Google Play" />
      <div className="market-button-text-container">
        <span className="market-button-title">GET IT ON</span>
        <span className="market-button-store-name">Google Play</span>
      </div>
    </a>
  );
};

const AppStoreButton = ({ url }: { url: string; }) => {
  return (
    <a href={url} target="_blank" className="market-btn" role="button">
      <img src="svgs/app-store.svg" alt="App Store" />
      <div className="market-button-text-container">
        <span className="market-button-title">Download on the</span>
        <span className="market-button-store-name">App Store</span>
      </div>
    </a>
  );
};