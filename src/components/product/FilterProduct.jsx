import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../context/ProductContext";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();
  return (
    <Paper
      sx={{
        position: "absolute",
        mt: 10,
        p: 1,
        boxShadow: "0",
        backgroundColor: "transparent",
      }}
    >
      <FormControl>
        <RadioGroup
          defaultValue="all"
          onChange={(e) => fetchByParams("category", e.target.value)}
          name="radio-buttons-group"
          sx={{ my: 1 }}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All"
          ></FormControlLabel>
          <FormControlLabel
            value="rose"
            control={<Radio />}
            label="Rose"
          ></FormControlLabel>
          <FormControlLabel
            value="bag"
            control={<Radio />}
            label="Bag"
          ></FormControlLabel>
          <FormControlLabel
            value="baira"
            control={<Radio />}
            label="Baira"
          ></FormControlLabel>
          <FormControlLabel
            value="glasses"
            control={<Radio />}
            label="Glasses"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default FilterProduct;
