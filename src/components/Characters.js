import React, { useEffect, useState } from "react";
import { fetchAllCharacter } from "../utils/marvel_api/marvel_character";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  Input,
  TextField,
  FormControl,
} from "@mui/material";
import "./../styles/characters.scss";
import SearchIcon from "@mui/icons-material/Search";

const Characters = () => {
  const [featuredCharacter, setFeaturedChar] = useState();
  const [featuredCharacterDetails, setFeaturedCharDtls] = useState();
  useEffect(() => {
    fetchEvent();
  }, []);
  const fetchEvent = async () => {
    const { results } = await fetchAllCharacter(1, 1561);

    setFeaturedChar(results[0]);

    // const
  };
  if (featuredCharacter) {
    return (
      <div style={{ height: "100%", padding: "70px 0.5rem" }}>
        <div align="center" style={{ marginBottom: ".5rem" }}>
          <TextField
            className="searchField"
            // style={{ width: "50%",margin-bottom:"" }}
            label="Search Marvel Character"
            variant="standard"
            InputProps={{
              style: { fontSize: 20 },
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>{" "}
        <h3
          style={{ paddingLeft: "1rem", marginBottom: "0", fontSize: "30px" }}
        >
          FEATURED CHARACTER
        </h3>
        <div className="featured-character">
          <div className="image-cont">
            <img
              style={{ width: "100%" }}
              src={`${featuredCharacter.thumbnail.path}.${featuredCharacter.thumbnail.extension}`}
            ></img>
          </div>
          <div style={{ padding: ".5rem 0" }}>
            <h3 style={{ margin: 0 }}>{featuredCharacter.name}</h3>
            <div style={{ marginTop: ".5rem" }}>
              {featuredCharacter?.description || "Description Unavailable"}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Characters;
