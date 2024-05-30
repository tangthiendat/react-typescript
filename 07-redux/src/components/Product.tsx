interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({ image, title, price, description }) => {
  function handleAddToCart() {}

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
