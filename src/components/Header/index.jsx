import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const state = useSelector((state) => state.card);

  const Sum = () => {
    let total = 0;
    for (let i in state) {
      total += state[i].qty;
    }
    return total;
  };

  return (
    <>
      <div className="ui fixed menu" style={{ padding: " 0.75rem 2rem" }}>
        <Link to="/">
          {" "}
          <h1>FakeStore API</h1>
        </Link>

        <div className="right menu">
          <a href="/#" className="item">
            Sign Up
          </a>
          <a href="/#" className="item">
            Login
          </a>
          <Link to="/card">
            <div className="ui labeled button">
              <div className="ui button">
                <i className="shop icon"></i>
              </div>
              <a href="/#" className="ui basic label">
                <Sum />
              </a>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
