import { Link } from "react-router-dom";
import "./ProductGridItem.css";

export const ProductGridItem = ({ name, description, tags, _id }) => {
  return (
    <div className="grid-item">
      <Link className="link" to={`/product-detail/${_id}`}>
        <div className="information-item">
          <h3>{name}</h3>
          <h5>{description}</h5>
        </div>
        <div className="container-tags">
          {tags.map((tag, index) => (
            <h6 className="tags" key={index}>{tag}</h6>
          ))}
        </div>
      </Link>
    </div>
  );
};
