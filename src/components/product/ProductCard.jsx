import { Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import { useProducts } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <Card
        sx={{
          background: "#93b8db",
          border: 5,
          width: 280,
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <CardHeader title={item.title} subheader="November 3, 2023" />
        <CardMedia
          component="img"
          height="160"
          image={item.picture}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableSpacing
        >
          <Button
            onClick={() => navigate(`/details/${item.id}`)}
            variant="contained"
          >
            Buy
          </Button>
          <Button
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="contained"
            color="secondary"
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteProduct(item.id)}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
