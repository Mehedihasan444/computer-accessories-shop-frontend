import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MyReactImageMagnify from "./MyReactImageMagnify "; // Ensure correct import path

const Product_Image = ({ items }) => {
  const myRenderItem = (item) => {
    return item.original;
  };

  const properties = {
    thumbnailPosition: "left",
    useBrowserFullscreen: false,
    showPlayButton: false,
    renderItem: myRenderItem,
    items: items
  };

  return <ImageGallery {...properties} />;
};

export default Product_Image;