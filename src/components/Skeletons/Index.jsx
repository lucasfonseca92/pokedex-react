import { Skeleton, Container } from "@mui/material";
import React from "react";

export const Skeletons = () => {
  return (
    <Container>
      <Skeleton variant="rounded" width='100%' height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width='100%' height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width='100%' height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width='100%' height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width='100%' height={150} sx={{ marginBottom: "1em" }} />


    
    
    </Container>
  );
};
