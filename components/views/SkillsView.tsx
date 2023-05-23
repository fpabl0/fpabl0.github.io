import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import { Dict } from "@/get-dictionary";
import { SectionTitle } from "../ui/SectionTitle";

const skillsData = [
  [
    { icon: "devicon-embeddedc-plain", label: "Embedded C" }
  ],
  [
    { icon: "devicon-go-original-wordmark", label: "Go" }
  ],
  [
    { icon: "devicon-flutter-plain", label: "Flutter" },
    { icon: "devicon-dart-plain", label: "Dart" },
  ],
  [
    { icon: "devicon-javascript-plain", label: "JavaScript" },
    { icon: "devicon-typescript-plain", label: "TypeScript" },
    { icon: "devicon-nodejs-plain", label: "NodeJS" },
    { icon: "devicon-react-original", label: "ReactJS" },
    { icon: "devicon-nextjs-original", label: "NextJS" }
  ],
  [
    { icon: "devicon-sqlite-plain", label: "Sqlite" },
    { icon: "devicon-mysql-plain", label: "MySQL" },
    { icon: "devicon-mongodb-plain", label: "MongoDB" },
  ],
  [
    { icon: "devicon-github-original", label: "Git & Github" }
  ],
  [
    { icon: "devicon-windows8-original", label: "Windows" },
    { icon: "devicon-apple-original", label: "Mac" },
    { icon: "devicon-linux-plain", label: "Linux" },
  ],
];

type Props = {
  id?: string;
  dict: Dict["skills_view"];
};

export const SkillsView = ({ id, dict }: Props) => {
  return (
    <Box id={id}>
      <Toolbar />
      <Box m={2}>
        <SectionTitle title={dict.section} />
        <Grid mt={1} spacing={2} container>
          {
            dict.skill_groups.map((g, index) => (
              <Grid key={`skill-group-${g}`} xs={12} sm={6} md={4} item>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {g}
                    </Typography>
                    <Grid
                      mt={1}
                      spacing={1}
                      wrap="wrap"
                      container
                    >
                      {
                        skillsData[index].map((d) => (
                          <Grid key={`skill-${d.label}`} item>
                            <Chip
                              icon={<div className={d.icon} style={{ fontSize: "18px", paddingLeft: "5px" }}></div>}
                              label={d.label}
                              sx={{
                                backgroundColor: "#3be2dc3a",
                              }}
                            />
                          </Grid>
                        ))
                      }
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
};