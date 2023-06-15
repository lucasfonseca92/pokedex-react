import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import PokemonTable from "../components/PokemonTable";
import { useNavigate } from "react-router-dom";

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, []);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{name}</Typography>
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box
                component="img"
                src={sprites.front_default}
                width="50%"
                height="100%"
              />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box display="flex" justifyContent="space-between">
                <Box
                  component="img"
                  src={sprites.front_female}
                  width="25%"
                  height="25%"
                />
                <Box
                  component="img"
                  src={sprites.front_shiny}
                  width="25%"
                  height="25%"
                />
                <Box
                  component="img"
                  src={sprites.front_shiny_female}
                  width="25%"
                  height="25%"
                />
              </Box>
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="15px">
                {moves.map((moveData, key) => (
                  <Chip
                    key={key}
                    sx={{ m: "5px" }}
                    label={moveData.move.name}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
