import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {
  fetchProduct,
  removeSelectedProduct,
  addToCard,
} from "../../redux/actions/productActions";

const Loading = () => (
  <div
    className="ui column stackable grid container segment"
    style={{ margin: "6rem " }}
  >
    <div className="column grid">
      <div className="ui one column stackable center aligned page grid">
        <Skeleton count={1} height={450} width={400} />
      </div>

      <div className="column" style={{ padding: 24 }}>
        <Skeleton count={1} height={40} width={300} />
        <Skeleton count={1} height={120} width={650} />
        <Skeleton count={1} height={40} width={120} />

        <Skeleton count={1} height={40} width={250} />
      </div>
    </div>
  </div>
);

const ShowProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    product && (
      <div
        className="ui column stackable grid container segment"
        style={{ marginTop: "6rem " }}
      >
        <div className="column">
          <div className="column">
            <img
              className="ui medium image centered"
              src={product.image}
              alt=""
            />
          </div>
          <div className="ui horizontal divider">and</div>
          <div className="column" style={{ padding: 24 }}>
            <h3 className="ui header">{product.title}</h3>
            <p>{product.description}</p>
            <h3 className="ui header">{product.category}</h3>
            <Link to="/">
              <div className="ui animated button">
                <div className="visible content">Go back</div>
                <div className="hidden content">
                  <i className="left arrow icon"></i>
                </div>
              </div>
            </Link>

            <div
              className="ui vertical animated button"
              tabindex="0"
              onClick={() => dispatch(addToCard(product))}
            >
              <div className="hidden content">Shop</div>
              <div className="visible content">
                <i className="shop icon"></i>
              </div>
            </div>

            <Link to="/card">
              <div className="ui animated button">
                <div className="visible content">Go to Card</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

const Index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct(id));
    setInterval(() => {
      setIsLoading(false);
    }, 3800);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);

  return isLoading ? <Loading /> : <ShowProduct />;
};

export default Index;
