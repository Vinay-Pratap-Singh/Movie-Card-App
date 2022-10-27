const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }} key={props.detail.id}>
      <img
        style={{ height: "22rem" }}
        className="card-img-top"
        src={props.detail.src}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.detail.movieName}</h5>
        <p className="card-text">{props.detail.desc}</p>
        <a href="/" className="btn btn-primary">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default Card;
