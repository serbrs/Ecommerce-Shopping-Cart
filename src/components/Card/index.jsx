import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  removeFromCard,
  subQuantity,
} from "../../redux/actions/productActions";

const Index = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  console.log(card);

  return card.length === 0 ? (
    <div
      className="ui column stackable center page grid"
      style={{ marginTop: "6rem" }}
    >
      <h2 className="ui center aligned icon header">
        <i className="box icon"></i>
        There is nothing to show
      </h2>
    </div>
  ) : (
    <div
      className="ui items  one column stackable center aligned page grid"
      style={{ marginTop: "8rem", marginLeft: "12px", marginRight: "12px" }}
    >
      {card.map((item) => (
        <div className="ui card" style={{ marginRight: "12px" }}>
          <div className="image">
            <img
              src={item.image}
              alt=""
              style={{ padding: "12px", width: 290, height: 250 }}
            />
          </div>
          <div className="description" style={{ padding: "12px" }}>
            {item.title}
          </div>
          <div className="content" style={{ padding: "12px" }}>
            <span
              className="right floated"
              onClick={() => dispatch(removeFromCard(item))}
            >
              <i
                className="trash icon"
                style={{
                  cursor: "pointer",
                }}
              ></i>
            </span>
            <i
              className="minus square outline icon"
              onClick={() => dispatch(subQuantity(item))}
            ></i>
            {item.qty}
            <i
              className="plus square outline icon"
              onClick={() => dispatch(addQuantity(item))}
            ></i>
            x {item.price} = {item.qty * item.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
