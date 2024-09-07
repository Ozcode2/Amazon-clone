// import React from "react";
// import "./SubTotal.css";
// import NumberFormat from "react-number-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useNavigate } from "react-router-dom";

// const SubTotal = () => {
//   const navigate = useNavigate();
//   const [{ basket }, dispatch] = useStateValue();
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />
//       <button onClick={(e) => navigate("/addressselect")}>Proceed to Checkout</button>
//     </div>
//   );
// };

// export default SubTotal;

import React from "react";
import "./SubTotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale={true}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={(e) => navigate("/addressselect")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
