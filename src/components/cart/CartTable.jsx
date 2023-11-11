import React from "react";
import "./cart.css";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { calcTotalPrice } from "./../../helpers/funcrion";

const CartTable = ({ cart }) => {
  const { deleteProductInCart, changeProductCount } = useCartContext();

  return (
    <div>
      <Container>
        <div className="bag-content">
          <div className="header">
            <h1 className="bag-header">Review your bag.</h1>
            <div className="bag-header-message">
              <span>Free delivery and free returns.</span>
            </div>
          </div>
          {cart.products.map((el) => (
            <div className="bg-cart">
              <Card
                sx={{
                  display: "flex",
                  marginTop: "100px",
                  width: "570px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    m: 3,
                  }}
                >
                  <Typography component="div" variant="h5">
                    {el.item.title}
                    <br />
                  </Typography>
                  <Select
                    labelId="custom-select-label"
                    id="custom-select"
                    sx={{ width: "150px" }}
                    value={el.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, el.item.id)
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={5}>6</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
                  <Typography sx={{ fontSize: "25px" }}>
                    ${el.subPrice}
                  </Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: 250, objectFit: "cover", height: "220px" }}
                    alt="Product-Image"
                    image={el.item.picture}
                  />
                  <Button
                    onClick={() => deleteProductInCart(el.item.id)}
                    variant="contained"
                    size="medium"
                    sx={{ m: "5 0" }}
                  >
                    Remove
                  </Button>
                </Box>
              </Card>
            </div>
          ))}
          <Box className="bag_total-label">
            <Typography
              sx={{
                display: "flex",
                fontWeight: 600,
                fontSize: "24px",
                color: "1d1d1f",
                mt: 1,
                justifyContent: "space-between",
                width: "1100px",
              }}
              variant="h6"
              component="div"
            >
              TotalPrice: {cart?.totalPrice}
              <Button variant="contained" sx={{ height: "20px", p: 2 }}>
                BUY NOW
              </Button>
            </Typography>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default CartTable;
