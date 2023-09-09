import React, { Fragment,useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
// import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction.js";
import { useDispatch,useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="MIU" />
          <div className="banner">
            <p>TRENDIEST PICKS AT BEST PRICE</p>
            <h1>STYLES YOU DESERVE</h1>

            <a href="#container">
              <button>
                <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">PRODUCTS</h2>

          <div className="container" id="container">
      
            {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;




// const product = {
  //   name: "lehenga",
  //   images: [
  //     {
  //       url: "https://zuriador.com/cdn/shop/products/Elle-Formal-Lehenga-Rae-Collection-Zuria-Dor-4_bfcd4b72-640f-409c-98c9-9f3a446e7eb0_700x.jpg?v=1661264584",
  //     },
  //     {
  //       url: "https://zuriador.com/cdn/shop/products/Elle-Formal-Lehenga-Rae-Collection-Zuria-Dor-4_bfcd4b72-640f-409c-98c9-9f3a446e7eb0_700x.jpg?v=1661264584",
  //     },
  //   ],
  //   price: "20000",
  //   ratings:2,
  //   _id: "67681672",
  //   numOfReviews: 256,
  // };
  