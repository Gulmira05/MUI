import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
};
const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, getOneProduct, editProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(init);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  console.log(oneProduct);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  console.log(oneProduct);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }
  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  function saveEditedProduct() {
    for (let key in product) {
      if (!product[key]) {
        console.log("error");
      }
    }
    editProduct();
  }

  return (
    <FormControl sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "10px auto" }}
        placeholder="enter title"
        fullWidth
        variant="outlined"
        name="title"
        value={product.title}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "10px auto" }}
        placeholder="enter  description"
        fullWidth
        variant="outlined"
        name="description"
        value={product.description}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "10px auto" }}
        placeholder="enter category"
        fullWidth
        variant="outlined"
        name="category"
        value={product.category}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "10px auto" }}
        placeholder="enter price"
        fullWidth
        variant="outlined"
        name="price"
        value={product.price}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "10px auto" }}
        placeholder="enter picture"
        fullWidth
        variant="outlined"
        name="picture"
        value={product.picture}
      />
      {isEdit ? (
        <Button
          onClick={addProduct}
          sx={{
            bgcolor: "rgb(51, 153, 255)",
            color: "#fff",
            "&:hover": { bgcolor: "rgb(0, 89, 178)" },
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Add
        </Button>
      ) : (
        <Link to="/">
          <Button
            onClick={saveEditedProduct}
            sx={{
              bgcolor: "rgb(51, 153, 255)",
              color: "#fff",
              "&:hover": { bgcolor: "rgb(0, 89, 178)" },
            }}
            variant="outlined"
            fullWidth
            size="large"
          >
            Save changes
          </Button>
        </Link>
      )}
    </FormControl>
  );
};

export default Form;
