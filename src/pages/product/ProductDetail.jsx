import { useParams } from "react-router-dom";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useFetchProductsDetails } from "../../hooks/useFetchProductsDetails";

export const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProductsDetails(id);
  const { detailProduct, commentsProduct } = product;
  console.log(commentsProduct);
  return (
    <NavbarComponent>
      <h1>{detailProduct?.name}</h1>

      <p>{detailProduct?.description}</p>

      <p>{detailProduct?.url}</p>

      <p>{detailProduct?.image}</p>

      {commentsProduct?.map((comment, index) => (
        <div key={index}>
          <p>{comment.userId.userName}</p>
          <p>{comment.content}</p>
          <p>{comment.rate}</p>
        </div>
      ))}
    </NavbarComponent>
  );
};
