"use client";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import DuoIcon from "@mui/icons-material/Duo";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FileStateCard from "./file-state-card";

export default function FileState() {
  return (
    <Grid container spacing={{ xs: 2, md: 3, xl: 5 }} columns={12}>
      <Grid xs={6} sm={6} xl={3}>
        <FileStateCard
          title="Images"
          icon={
            <BurstModeIcon
              sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
              color="secondary"
            />
          }
          progressValue={50}
          minStored={`${115.11} MB`}
          maxStored={`${300.0} MB`}
        />
      </Grid>
      <Grid xs={6} sm={6} xl={3}>
        <FileStateCard
          title="Video"
          icon={
            <DuoIcon
              sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
              color="warning"
            />
          }
          progressValue={50}
          minStored={`${115.11} MB`}
          maxStored={`${300.0} MB`}
        />
      </Grid>
      <Grid xs={6} sm={6} xl={3}>
        <FileStateCard
          title="Video"
          icon={
            <LibraryMusicIcon
              sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
              color="info"
            />
          }
          progressValue={50}
          minStored={`${115.11} MB`}
          maxStored={`${300.0} MB`}
        />
      </Grid>
      <Grid xs={6} sm={6} xl={3}>
        <FileStateCard
          title="Video"
          icon={
            <AssignmentIcon
              sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
              color="success"
            />
          }
          progressValue={50}
          minStored={`${115.11} MB`}
          maxStored={`${300.0} MB`}
        />
      </Grid>
    </Grid>
  );
}
