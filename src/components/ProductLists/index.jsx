import React, { useEffect } from "react";
import ProductComponent from "../ProductComponent";
import { fetchProducts } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      className="ui four column doubling stackable grid container"
      style={{ margin: "45px" }}
    >
      <ProductComponent />
    </div>
  );
};

export default Index;
