import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addToCard } from "../../redux/actions/productActions";

export const Loading = () => {};

const Index = () => {
  const state = useSelector((state) => state.Allproducts.product);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (cat) => {
    setFilter([]);
    setCategory("");
    const filteredCategory = state.filter((c) => c.category === cat);
    setFilter(filteredCategory);
    setCategory(cat);
  };

  const handleAll = (cat) => {
    setFilter(state);
    setCategory("All");
  };

  useEffect(() => {
    setFilter(state);
    return () => {
      setIsLoading(false);
    };
  }, [state]);

  return (
    <>
      <div style={{ margin: "0 auto" }}>
        {" "}
        <h1>Latest Products</h1>
        <hr />
      </div>

      <div className="ui four item menu">
        <a
          href="/#"
          className={category === "All" ? "item active" : "item"}
          onClick={() => handleAll("All")}
        >
          All
        </a>
        <a
          href="/#"
          className={category === "men's clothing" ? "item active" : "item"}
          onClick={() => handleClick("men's clothing")}
        >
          Clothes
        </a>
        <a
          href="/#"
          className={category === "jewelery" ? "item active" : "item"}
          onClick={() => handleClick("jewelery")}
        >
          Jewelry
        </a>{" "}
        <a
          href="/#"
          className={category === "electronics" ? "item active" : "item"}
          onClick={() => handleClick("electronics")}
        >
          Electronics
        </a>
      </div>

      {isLoading ? (
        // <div className="two column wide stackable ">
        <>
          <Skeleton
            count={2}
            height={450}
            width={260}
            style={{ marginBottom: "25px" }}
          />
          <Skeleton
            count={2}
            height={450}
            width={260}
            style={{ marginBottom: "25px" }}
          />
          <Skeleton
            count={2}
            height={450}
            width={260}
            style={{ marginBottom: "25px" }}
          />
          <Skeleton
            count={2}
            height={450}
            width={260}
            style={{ marginBottom: "25px" }}
          />
        </>
      ) : (
        filter.map((product) => (
          <div className="four column wide stackable" key={product.id}>
            <div className="ui card">
              <img
                style={{ width: 250, height: 250 }}
                className="ui centered small image"
                src={product.image}
                alt={product.title}
              />

              <div
                className="content"
                style={{ padding: 20, textAlign: "center" }}
              >
                <a className="header" href="/">
                  {product.title.substring(0, 12)}
                </a>
                <h5 style={{ fontWeight: "bold", color: "#44444" }}>
                  {" "}
                  {product.description.substring(0, 46)} ...
                </h5>
                <div className="meta">${product.price}</div>
              </div>
              {/* Buttons */}
              <div className="ui equal width center aligned  padded grid">
                <div className="row">
                  <div className="column">
                    {" "}
                    <button
                      className="ui button"
                      onClick={() => dispatch(addToCard(product))}
                    >
                      <i className="cart arrow down icon"></i>
                    </button>
                  </div>
                  <div className="column" style={{ marginRight: "5px" }}>
                    <Link to={`/product/${product.id}`}>
                      <button className="ui button">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Index;
