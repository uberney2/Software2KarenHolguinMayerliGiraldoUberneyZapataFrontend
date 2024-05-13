import React from "react";
import "./ProductGridItem.css";

export const ProductGridItem = ({ name, description, tags }) => {
  return (
    <div className="grid-item">
      <div className="information-item">
        <h3>{name}</h3>
        <h5>{description}</h5>
      </div>
      <div className="container-tags">
        {tags.map((tag) => (
          <h6 className="tags">{tag}</h6>
        ))}
      </div>
    </div>
  );
};
