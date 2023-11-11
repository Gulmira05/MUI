import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import { ACTION_CART } from "../const";
import { calcSubPrice, calcTotalPrice } from "../helpers/funcrion";

const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_CART.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    cart.products.push(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }
  function getProductFromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
    }
    dispatch({ type: ACTION_CART.GET_CART, payload: cart });
  }

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((el) => el.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let obj = cart.products.find((el) => el.item.id === id);
      return obj ? true : false;
    }
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("stop");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((el) => {
      if (el.item.id === id) {
        el.count = count;
        el.subPrice = calcSubPrice(el);
      }
      return el;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }
  const values = {
    addProductToCart,
    cart: state.cart,
    deleteProductInCart,
    checkProductInCart,
    changeProductCount,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
