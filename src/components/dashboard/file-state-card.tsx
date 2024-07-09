import {
  Card,
  CardContent,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import BurstModeIcon from "@mui/icons-material/BurstMode";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface FileStateCardProps {
  title: string;
  icon?: React.ReactNode;
  progressValue?: number;
  minStored?: string | number;
  maxStored?: string | number;
}

export default function FileStateCard({
  title,
  icon,
  progressValue = 50,
  minStored,
  maxStored,
}: FileStateCardProps) {
  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* <BurstModeIcon sx={{ width: 60, height: 60 }} color="secondary" /> */}
        {icon}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <BorderLinearProgress variant="determinate" value={progressValue} />
        <Typography>
          <b>{minStored}</b> of {maxStored}
        </Typography>
      </CardContent>
    </Card>
  );
}
