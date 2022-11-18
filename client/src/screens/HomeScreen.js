import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "../App.css";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import Slider from "../components/homeComponents/Slider";
import Sprites from "../components/homeComponents/sprites";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Slider />
      <Sprites />
      <MDBContainer fluid className="my-5 text-center">
        <strong className="titels">Our products</strong>
      </MDBContainer>
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
