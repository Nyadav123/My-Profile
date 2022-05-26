import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <a href={link}  target="_blank" rel="noreferrer">
        <img src={img}  className="p-img" />
      </a>
    </div>
  );
};

export default Product;
