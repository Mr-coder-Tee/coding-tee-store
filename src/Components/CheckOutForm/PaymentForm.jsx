import React from "react";
import Review from "./Review";
import { Button } from "@material-ui/core";

const PaymentForm = ({ setShippingData, checkoutToken,backStep,handleCaptureCheckout,nextStep }) => {

    console.log("setShippingData-->",setShippingData)

    const handleSubmit=()=>{

        const orderData={
            line_item:checkoutToken.live.line_items,
            customer:{firstname:setShippingData.firstname,lastname:setShippingData.lastname,email:setShippingData.email},
            shipping:{name:'primary',
                     street:setShippingData.address1,
                     suburb:setShippingData.address2,
                     town_city:setShippingData.city,
                     province:setShippingData.province,
                     shipping_country:"South Africa",
                     postal_zip:setShippingData.zip},
            fulfillment:{shipping_method:setShippingData.shippingOption},
            payment:{
                gateway:'manual',
                manual:{
                    id:'gway_joPZk8OkaqRple'
                },
            }
        }
        handleCaptureCheckout(checkoutToken.id,orderData)
        nextStep();

    }

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
      <div style={{display:'flex',justifyContent:'space-between' ,marginTop:'10px'}}>

        <Button variant="outlined" onClick={backStep}>Back</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
            Pay {checkoutToken.live.subtotal.formatted_with_symbol}
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
