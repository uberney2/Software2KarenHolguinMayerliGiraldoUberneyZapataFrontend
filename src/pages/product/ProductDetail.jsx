// ProductDetail.jsx

import { useParams } from "react-router-dom";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useFetchProductsDetails } from "../../hooks/useFetchProductsDetails";
import {Star} from "../../components/star-rating/StarRating"
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProductsDetails(id);
  const { detailProduct, commentsProduct } = product;

  const renderStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5; 

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} filled />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" filled={false} />);
    }

    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} filled={false} />);
    }

    return stars;
  };

  return (
    <NavbarComponent>
      <div className="product-detail-container">
        <div className="product-info">
          <h1 className="product-name">{detailProduct?.name}</h1>
          <p className="product-description">{detailProduct?.description}</p>
          <div className="product-image-container">
            <img
              className="product-image"
              src={detailProduct?.image}
              alt={detailProduct?.name}
            />
          </div>
          <div className="product-details">
            <div className="product-rating">
              <span>Rating: </span>
              {renderStars(detailProduct?.rate)}
            </div>
            <a
              href={detailProduct?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              View Product
            </a>
          </div>
        </div>

        <div className="comments-container">
          <h2 className="comments-title">Customer Reviews</h2>
          <div className="comments-list">
            {commentsProduct?.map((comment, index) => (
              <div className="comment" key={index}>
                <p className="comment-user">By: {comment.userId.userName}</p>
                <p className="comment-content">{comment.content}</p>
                <p className="comment-rate">Rating: {comment.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NavbarComponent>
  );
};
