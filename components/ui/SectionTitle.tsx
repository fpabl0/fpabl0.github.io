import Typography from "@mui/material/Typography";
import { useMemo } from "react";

type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {

  const parts = useMemo(() => {
    return title.split(" ");
  }, [title]);

  return (
    <Typography
      variant="h5"
      component="h1"
      color="primary"
      fontWeight="bold"
      textTransform="uppercase"
    >
      {
        parts.map((s, index) => (
          <span key={`section-title-span-${index}`}>
            {s.at(0)?.toUpperCase()}
            <Typography variant="h5" component="span" fontWeight="bold" sx={{
              fontSize: (theme) => `calc(${theme.typography.h5.fontSize} * 0.9)`,
            }}>
              {s.substring(1)}{parts.length !== (index + 1) ? ' ' : ''}
            </Typography>
          </span>
        ))
      }
    </Typography>
  );
};