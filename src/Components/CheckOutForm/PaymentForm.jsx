import React from "react";
import Review from "./Review";

const PaymentForm = ({ setShippingData, checkoutToken }) => {
  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <div className="paymentHeader">
        <h3>Payment Method</h3>
      </div>
      <div className="paymentHeader">
        <p>
          Make your payment directly into our bank account. Please use your
          order ID as payment reference.{" "}
          <strong className="red">
            Your order will not be shipped until the funds have cleared in our
            account.
          </strong>
        </p>
      </div>

      <div className="eft">
      <div className="paymentHeader">
        <h5>EFT</h5>
      </div>
        <table>
          <tr>
            <th>Account name</th>
            <th>Acc No.</th>
            <th>Bank Name</th>
            <th>Cheque</th>
          </tr>
          <tr>
            <td>Phala OM</td>
            <td>4242424242</td>
            <td>ABSA</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Manaka TT</td>
            <td>4242424242</td>
            <td>Capitec</td>
            <td>NO</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PaymentForm;
