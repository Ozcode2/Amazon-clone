import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useUser } from "./UserContext";

function Header({ setSearchQuery }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const { userData, clearUserData } = useUser();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update search query
    // You may add logic here to trigger search based on user input
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      clearUserData();
    }
  };

  return (
    <nav className="header">
      <Link to="/amazon-clone">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {userData && (
        <div className="user__location">
          <p id="name">{`Deliver to ${userData.fullName}`}</p>
          <p>
            <FaMapMarkerAlt color="#d6d6d6" size="18" id="location__marker" />{" "}
            {userData.city} {userData.zipCode}
          </p>
        </div>
      )}

      <div className="header__search">
          <input
            type="search"
            placeholder="Search Amazon"
            className="header__searchInput"
            onChange={handleSearch}
          />
          <FaSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/amazon-clone" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <FaShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
