import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Product_Image = ({ images=[] }) => {



  return <ImageGallery items={images} />;
};

export default Product_Image;