<div className="ui left action input">
  <button className="ui teal labeled icon button">
    <i className="cart icon"></i>
    Checkout
  </button>
  <input type="text" value="$52.03" />
</div>;

<div class="two column grid">
  <div className="ui red button column">
    <i className="heart icon"></i>
  </div>
  <Link to={`/product/${product.id}`}>
    <a className="fluid ui button column" href="/#">
      View Product
    </a>
  </Link>
</div>;

<>
  <div className="ui column  ">
    <Skeleton count={1} height={300} width={450} />
  </div>
  <div className="ui column ">
    <Skeleton count={1} height={40} width={200} />
    <Skeleton count={1} height={145} width={650} />
    <Skeleton count={1} height={40} width={200} />
    <div className="ui two column  grid" style={{ marginTop: "15px" }}>
      <Skeleton count={1} height={40} width={150} />
      <Skeleton count={1} height={40} width={100} />
    </div>
  </div>
</>;

<div
  className="ui column stackable grid container segment"
  style={{ marginTop: "6rem " }}
>
  <div className="column">
    <div className="column">
      <Skeleton count={1} height={300} width={450} />
    </div>

    <div className="column" style={{ padding: 24 }}>
      <Skeleton count={1} height={40} width={200} />
      <Skeleton count={1} height={145} width={650} />
      <Skeleton count={1} height={40} width={200} />

      <Skeleton count={1} height={40} width={150} />
      <Skeleton count={1} height={40} width={100} />
    </div>
  </div>
</div>;
