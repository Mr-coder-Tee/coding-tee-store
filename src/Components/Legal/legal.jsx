import React, { useEffect } from "react";
import { useParams } from "react-router";

const Legal = () => {
  const { id: policy } = useParams();

  useEffect(() => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    scrollToTop();
  }, [policy]);

  const Pp = () => (
    //Privacy Policy
    <div className="policy">
      <h1>Privacy Policy</h1>
      <h4>What do we do with your information?</h4>
      <p>
        When you purchase something from our store, as part of the buying and
        selling process, we collect the personal information you give us such as
        your name, address and email address. When you browse our store, we also
        automatically receive your computer’s internet protocol (IP) address to
        provide us with information that helps us learn about your browser and
        operating system. Email marketing (if applicable): With your permission,
        we may send you emails about our store, new products and other updates.
      </p>

      <h4>How do you get my consent?</h4>
      <p>
        When you provide us with personal information to complete a transaction,
        verify your credit card, place an order, arrange for a delivery or
        return a purchase, we imply that you consent to our collecting it and
        using it for that specific reason only. If we ask for your personal
        information for a secondary reason, like marketing, we will either ask
        you directly for your expressed consent or provide you with an
        opportunity to say no.
      </p>

      <h4>Age of consent</h4>
      <p>
        By using this site, you represent that you are at least the age of
        majority in your state or province of residence, or that you are the age
        of majority in your state or province of residence and you have given us
        your consent to allow any of your minor dependents to use this site.
      </p>

      <h4>Commerce js</h4>
      <p>
        Our store is hosted on commercejs Inc. They provide us with an online
        e-commerce platform that allows us to sell our products and services to
        you. Your data is stored through commercejs’s data storage, databases
        and the general commercejs application. They store your data on a secure
        server behind a firewall.
      </p>

      <h4>Payment</h4>
      <p>
        You have two options of payments which is EFT and Direct payment. Use
        the Order Id in the email as the reference to your payment.
      </p>
    </div>
  );
  const Cp = () => (
    //Copyright Policy
    <div className="policy">
      <h1>Delivery Policy Refund Policy</h1>
      <p>
        Free standard shipping to South Africa on orders over R500. Free
        standard shipping is automatically applied at checkout. Free shipping is
        a limited promotion and is not available for orders delivered outside
        South Africa.
      </p>

      <h4>DELIVERY TIMES AND COSTS</h4>
      <p>
        It will take 7 business days for your product to get to you. Please take
        note that, according to courier service agreement, all orders will only
        check out on Mondays and Fridays for delivery.
      </p>

      <h4>South Africa</h4>
      <p>
        Standard Shipping: Deliverty fee R30 - All standard orders will be
        processed and dispatched from our warehouse immediately. TRACKING YOUR
        ORDER You will receive an email with a tracking number that can be used
        to check your parcel’s progress. To track your parcel and get an
        estimated delivery time, just follow the link in the tracking email.
      </p>
    </div>
  );
  const Dp = () => (
    //Delivery Policy
    <div className="policy">
      <h1>Refund policy</h1>
      <h4>Exchanges</h4>
      <p>
        No cash refunds on any purchases, we will gladly exchange goods within
        14 days. Please make sure to keep your receipt. Items to be in original
        condition.
      </p>
      <h4>Returns</h4>
      <p>
        Our policy lasts 14 days. If 14 days have gone by since your purchase,
        unfortunately, we can’t offer you a refund or exchange. To be eligible
        for a return, your item must be unused and in the same condition that
        you received it. It must also be in the original packaging.
      </p>
      <h4>Additional non-returnable items: </h4>
      <p>
        There are certain situations where only partial refunds are granted (if
        applicable) Any item, not in its original condition, is damaged or
        missing parts for reasons not due to our error. Any item that is
        returned more than 7 days after delivery.
      </p>
      <h4>Late or missing refunds (if applicable)</h4>
      <p>
        If you haven’t received a refund yet, first check your bank account
        again. Then contact your credit card company, it may take some time
        before your refund is officially posted. Next, contact your bank. There
        is often some processing time before a refund is posted. If you’ve done
        all of this and you still have not received your refund yet, please
        contact us via WhatsApp on 0683010023.
        <h4>Shipping Address</h4>
        <p>
          Please enter the correct shipping address, there will be no refunds
          due to the package being delivered to the wrong address.
        </p>
      </p>
      <h4>Exchanges</h4>
      <p>
        We only replace or exchange items if they are defective or damaged. If
        an item is of the wrong size you will pay all shipping to exchange for
        the size.
      </p>
      <h4>Shipping</h4>
      <p>
        To return your product, you should will be given a shipping address to
        use.
      </p>
    </div>
  );
  const rp = () => (
    //Refund Policy
    <div></div>
  );
  const Tc = () => (
    //Terms & Conditions
    <div className="policy">
      <h1>Terms & Conditions</h1>

      <h4>General conditions</h4>
      <p>
        We reserve the right to refuse service to anyone for any reason at any
        time. You understand that your content (not including credit card
        information), may be transferred unencrypted and involve (a)
        transmissions over various networks; and (b) changes to conform and
        adapt to technical requirements of connecting networks or devices.
        Credit card information is always encrypted during transfer over
        networks. You agree not to reproduce, duplicate, copy, sell, resell or
        exploit any portion of the Service, use of the Service, or access to the
        Service or any contact on the website through which the service is
        provided, without express written permission by us. The headings used in
        this agreement are included for convenience only and will not limit or
        otherwise affect these Terms.
      </p>
      <h4>Accuracy, complteness and timeliness of information</h4>
      <p>
        We are not responsible if information made available on this site is not
        accurate, complete or current. The material on this site is provided for
        general information only and should not be relied upon or used as the
        sole basis for making decisions without consulting primary, more
        accurate, more complete or more timely sources of information. Any
        reliance on the material on this site is at your own risk. This site may
        contain certain historical information. Historical information,
        necessarily, is not current and is provided for your reference only. We
        reserve the right to modify the contents of this site at any time, but
        we have no obligation to update any information on our site. You agree
        that it is your responsibility to monitor changes to our site.
      </p>
      <h4>Modifications to the service and prices</h4>
      <p>
        Prices for our products are subject to change without notice. We reserve
        the right at any time to modify or discontinue the Service (or any part
        or content thereof) without notice at any time. We shall not be liable
        to you or to any third-party for any modification, price change,
        suspension or discontinuance of the Service.
      </p>
      <h4>Products or services</h4>
      <p>
        Certain products or services may be available exclusively online through
        the website. These products or services may have limited quantities and
        are subject to return or exchange only according to our Return Policy.
        We have made every effort to display as accurately as possible the
        colours and images of our products that appear at the store. We cannot
        guarantee that your computer monitor's display of any colour will be
        accurate. We reserve the right, but are not obligated, to limit the
        sales of our products or Services to any person, geographic region or
        jurisdiction. We may exercise this right on a case-by-case basis. We
        reserve the right to limit the quantities of any products or services
        that we offer. All descriptions of products or product pricing are
        subject to change at anytime without notice, at the sole discretion of
        us. We reserve the right to discontinue any product at any time. Any
        offer for any product or service made on this site is void where
        prohibited. We do not warrant that the quality of any products,
        services, information, or other material purchased or obtained by you
        will meet your expectations, or that any errors in the Service will be
        corrected.
      </p>
      <h4>Accuracy of billing and account information</h4>
      <p>
        We reserve the right to refuse any order you place with us. We may, in
        our sole discretion, limit or cancel quantities purchased per person,
        per household or per order. These restrictions may include orders placed
        by or under the same customer account, the same credit card, and/or
        orders that use the same billing and/or shipping address. In the event
        that we make a change to or cancel an order, we may attempt to notify
        you by contacting the e-mail and/or billing address/phone number
        provided at the time the order was made. We reserve the right to limit
        or prohibit orders that, in our sole judgment, appear to be placed by
        dealers, resellers or distributors. You agree to provide current,
        complete and accurate purchase and account information for all purchases
        made at our store. You agree to promptly update your account and other
        information, including your email address and credit card numbers and
        expiration dates, so that we can complete your transactions and contact
        you as needed. For more detail, please review our Returns Policy.
      </p>

      <h4>Personal information</h4>
      <p>
        Your submission of personal information through the store is governed by
        our Privacy Policy. To view our Privacy Policy.
      </p>

      <h4>Errors, inaccuracies and omissions</h4>
      <p>
        Occasionally there may be information on our site or in the Service that
        contains typographical errors, inaccuracies or omissions that may relate
        to product descriptions, pricing, promotions, offers, product shipping
        charges, transit times and availability. We reserve the right to correct
        any errors, inaccuracies or omissions, and to change or update
        information or cancel orders if any information in the Service or on any
        related website is inaccurate at any time without prior notice
        (including after you have submitted your order). We undertake no
        obligation to update, amend or clarify information in the Service or on
        any related website, including without limitation, pricing information,
        except as required by law. No specified update or refresh date applied
        in the Service or on any related website, should be taken to indicate
        that all information in the Service or on any related website has been
        modified or updated.
      </p>
      <h4>Disclaimer of warrenties; Limitation of liability</h4>
      <p>
        We do not guarantee, represent or warrant that your use of our service
        will be uninterrupted, timely, secure or error-free. We do not warrant
        that the results that may be obtained from the use of the service will
        be accurate or reliable. You agree that from time to time we may remove
        the service for indefinite periods of time or cancel the service at any
        time, without notice to you. You expressly agree that your use of, or
        inability to use, the service is at your sole risk. The service and all
        products and services delivered to you through the service are (except
        as expressly stated by us) provided 'as is' and 'as available' for your
        use, without any representation, warranties or conditions of any kind,
        either express or implied, including all implied warranties or
        conditions of merchantability, merchantable quality, fitness for a
        particular purpose, durability, title, and non-infringement.
      </p>

      <h4>Image Disclaimer</h4>
      <p>
        The product images shown may represent the range of product, or be for
        illustration purposes only and may not be an exact representation of the
        product. The products attributes e.g. the style, sizes, colour etc. vary
        with each unique product. We will send exact images upon request and if
        available from stock. We recommend that customers unfamiliar with the
        products please do so accordingly. Please contact our us to request a
        sample image if required:0683010023
      </p>
      <h4>Entire agreement</h4>
      <p>
        The failure of us to exercise or enforce any right or provision of these
        Terms of Service shall not constitute a waiver of such right or
        provision. These Terms of Service and any policies or operating rules
        posted by us on this site or in respect to The Service constitutes the
        entire agreement and understanding between you and us and govern your
        use of the Service, superseding any prior or contemporaneous agreements,
        communications and proposals, whether oral or written, between you and
        us (including, but not limited to, any prior versions of the Terms of
        Service). Any ambiguities in the interpretation of these Terms of
        Service shall not be construed against the drafting party.
      </p>
      {/* <h4></h4>
        <p></p> */}
    </div>
  );

  if (policy === "PrivacyPolicy") return <Pp />;
  if (policy === "CopyrightPolicy") return <Cp />;
  if (policy === "TermsandConditions") return <Tc />;
  return <Dp />;
};

export default Legal;
