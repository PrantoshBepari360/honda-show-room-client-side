import Box from "@mui/material/Box";

import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Products from "./Products";

const Product = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </Box>
  );
};

export default Product;
