import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import Payment from "./Payment";
import ShippingAddress from "./ShippingAddress";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Header from "./Header";
import Register from "./Register";
import RecoverPassword from "./RecoverPassword";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51OFbvaF6wyEfqsLkFf90knhsjHreUkPKnx1jraH2XnnEqKOsoumRyUPxvi0W4fzJbC0VIfzPFtwjqd6sghOiMl5i00lshS9iHA"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/orders"
            element={
              <React.Fragment>
                <Header />
                <Orders />
              </React.Fragment>
            }
          />
          <Route path="/addressselect" element={<ShippingAddress />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <React.Fragment>
                  <Header setSearchQuery={setSearchQuery} />
                  <Payment />
                </React.Fragment>
              </Elements>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/amazon-clone/register" element={<Register />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route
            exact
            path="/amazon-clone"
            element={
              <React.Fragment>
                <Header setSearchQuery={setSearchQuery} />
                <Home searchQuery={searchQuery} />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
