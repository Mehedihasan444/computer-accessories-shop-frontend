import { Link } from "react-router-dom";
import Product_Card from "../../components/Product_Card/Product_Card";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Features from "../../components/Features/Features";
import Discount from "../../components/Discount/Discount";
import Brands from "../../components/Brands/Brands";
import Home_Page_Products from "../../components/Home_Page_Products/Home_Page_Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Deal_Of_the_Week from "../../components/Deal_Of_the_Week/Deal_Of_the_Week";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Features />
      <Deal_Of_the_Week/>
      <Home_Page_Products />
      <Discount />
      <Newsletter/>
      <Brands />
    </div>
  );
};

export default Home;
