// import "./App.css";
// import Header from "./component/layout/Header/Header.js";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home.js";
// import Products from "./component/Product/Products.js";
// import Dashboard from "./component/Admin/Dashboard.js"
// import ProductList from "./component/Admin/ProductList.js"
// import NewProduct from "./component/Admin/NewProduct.js"
// import Profile from "./component/User/Profile.js";
// import UpdateProfile from "./component/User/UpdateProfile.js";
// import UpdatePassword from "./component/User/UpdatePassword.js";
// import ForgotPassword from "./component/User/ForgotPassword.js";
// import ResetPassword from "./component/User/ResetPassword.js";
// import Search from "./component/Product/Search.js";
// import ProductDetails from "./component/Product/ProductDetails.js";
// import Cart from "./component/Cart/Cart.js";
// import Shipping from "./component/Cart/Shipping.js";
// import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
// import Payment from "./component/Cart/Payment.js";
// import OrderSuccess from "./component/Cart/OrderSuccess.js";
// import MyOrders from "./component/Orders/MyOrders.js";
// import OrderDetails from "./component/Orders/OrderDetails.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useEffect } from "react"; //, useState
// import WebFont from "webfontloader"; //, { load }
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions.js";
// import { useSelector } from "react-redux";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// // import axios from "axios";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// function App() {
//   const stripeApiKey =
//     "pk_test_51NkrF9SF5nA1U0D0RhzgnuQPRhD9uauPPvOSES2why6mDlEVQ2w1cxzWUTVNzFitVzy25Er2PCWhh3hn7QOJgQWK00dzzsINmj";
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   // const [stripeApiKey, setStripeApiKey] = useState("");
//   // async function getStripeApiKey() {
//   //   const { data } = await axios.get(`/api/v1/stripeapikey`);
//   //   setStripeApiKey(data.stripeApiKey);
//   // }
//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Montserrat", "Jost", "Poppins", "Droid Sans"],
//       },
//     });
//     store.dispatch(loadUser());
//     // getStripeApiKey();
//   }, []);
//   return (
//     <Router>
//       <Header />
//       {isAuthenticated && <UserOptions user={user} />}
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/product/:id" element={<ProductDetails />} />
//         <Route exact path="/products" element={<Products />} />
//         <Route path="/products/:keyword" element={<Products />} />
//         <Route exact path="/search" element={<Search />} />
//         <Route
//           path="/account"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/me/update"
//           element={
//             <ProtectedRoute>
//               <UpdateProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/password/update"
//           element={
//             <ProtectedRoute>
//               <UpdatePassword />
//             </ProtectedRoute>
//           }
//         />

//         <Route exact path="/password/forgot" element={<ForgotPassword />} />
//         <Route
//           exact
//           path="/password/reset/:token"
//           element={<ResetPassword />}
//         />
//         <Route exact path="/login" element={<LoginSignUp />} />
//         <Route exact path="/cart" element={<Cart />} />
//         <Route
//           exact
//           path="/shipping"
//           element={
//             <ProtectedRoute>
//               <Shipping />
//             </ProtectedRoute>
//           }
//         />

//         {stripeApiKey && (
//           <Route
//             exact
//             path="/process/payment"
//             element={

//                 <Elements stripe={loadStripe(stripeApiKey)}>
//                    <ProtectedRoute><Payment /></ProtectedRoute>
//                 </Elements>

//             }
//           />
//         )}
//         <Route
//           exact
//           path="/order/confirm"
//           element={
//             <ProtectedRoute>
//               <ConfirmOrder />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/success"
//           element={
//             <ProtectedRoute>
//               <OrderSuccess />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/order/:id"
//           element={
//             <ProtectedRoute>
//               <OrderDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <MyOrders />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//         exact
//         path="/admin/dashboard"
//         element={
//           <ProtectedRoute isAdmin={true}>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         exact
//         path="/admin/products"
//         element={
//           <ProtectedRoute isAdmin={true}>
//             <ProductList />
//           </ProtectedRoute>
//         }
//       />
//        <Route
//         exact
//         path="/admin/product"
//         element={
//           <ProtectedRoute isAdmin={true}>
//             <NewProduct />
//           </ProtectedRoute>
//         }
//       />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import Products from "./component/Product/Products.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/NotFound/NotFound.js"
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Search from "./component/Product/Search.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Orders/MyOrders.js";
import OrderDetails from "./component/Orders/OrderDetails.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser  from "./component/Admin/UpdateUser.js";
import ProductReviews  from "./component/Admin/ProductReviews.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react"; 
import WebFont from "webfontloader"; 
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
// import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripeApiKey =
    "pk_test_51NkrF9SF5nA1U0D0RhzgnuQPRhD9uauPPvOSES2why6mDlEVQ2w1cxzWUTVNzFitVzy25Er2PCWhh3hn7QOJgQWK00dzzsINmj";
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const [stripeApiKey, setStripeApiKey] = useState("");
  // async function getStripeApiKey() {
  //   const { data } = await axios.get(`/api/v1/stripeapikey`);
  //   setStripeApiKey(data.stripeApiKey);
  // }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Jost", "Poppins", "Droid Sans"],
      },
    });
    store.dispatch(loadUser());
    // getStripeApiKey();
  }, []);
  
window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        
       
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/account" element={<Profile />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />

          <Route
            exact path="/process/payment"
            element={
              stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              )
            }
          />

          <Route
            exact path="/admin/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
                <ProductList />
              </ProtectedRoute>
            }
          />

          <Route
            exact path="/admin/product"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
                <NewProduct />
              </ProtectedRoute>
            }
          />

          <Route exact path="/admin/product/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UpdateProduct /> </ProtectedRoute>} />

          <Route exact path="/admin/orders" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <OrderList /> </ProtectedRoute>} />

          <Route exact path="/admin/order/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <ProcessOrder /> </ProtectedRoute>} />
        
          <Route path="/admin/users" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UsersList /> </ProtectedRoute> } />
             
          <Route path="/admin/user/:id" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UpdateUser /> </ProtectedRoute> } />

          <Route path="/admin/reviews" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <ProductReviews /> </ProtectedRoute> } />

         
        </Route>

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

     
        <Route path="/*" element={ window.location.pathname === "/process/payment" ? null : <NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
