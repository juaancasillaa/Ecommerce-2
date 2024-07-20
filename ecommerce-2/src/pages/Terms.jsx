import React from 'react'
import styled from 'styled-components'

function Terms() {
  return (
    <>

    <TermsContent>

    <div className="everything">
        <h1>Terms & Policies</h1>
        <h3>These Terms of Use are effective from May 10 , 2024.</h3>
        <p>JCKICKS LLC (“JCKICKS”, “we”, or “us”) operates without limitation. These Terms of Use (“Terms”), along with our Privacy Policy, apply to your use of the Site and the services, features and functions that are offered and made available on, through, or using the Site or any other property that links to these Terms (together with the Site, the “Service”). Users of the Service must be at least 18 years old or have the permission and acceptance (to these Terms of Use) of a parent or guardian. Access of the Site or use of the Service by anyone under the age of 13 is prohibited even with parental or guardian consent. These Terms constitute a legally binding agreement between you and us. BY ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTAND, AND ARE BOUND BY THE TERMS AND CONDITIONS SET FORTH HEREIN. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE OR ACCESS THE SERVICE.</p>
        <h3>ALL SALES ARE FINAL</h3>
        <p>All sales are final. No refunds, returns or exchanges will be permitted. If you are concerned about sizing for a particular style of shoe, please refer to the manufacturer's size guidelines.</p>
        <h3>SHIPPING AND DELIVERY</h3>
        <p>All delivery times are estimates and are not guaranteed. Shipments may be affected by weather-related delays, carrier limitations or other events outside of our control. Delivery and processing speeds vary by shipping pricing options. Excluding deliveries to PO boxes and military bases, it will typically take 3-5 business days (M-F, excluding holidays) for a item, ordered before 2 PM ET with standard shipping, to be delivered to you (“buyer”) located in the 48 contiguous states. Estimated delivery times do not apply to international orders, which vary by country. Once your order ships, you will receive an email notification with your tracking information. International customers are responsible for any additional fees or taxes after an item ships. We do our best to protect international customers from incurring additional fees, but cannot guarantee against any unexpected expenses.</p>
        <h3>RETURNS</h3>
        <p>All sales with JCKICKS are final. Once an item sells, either online or physically, we are unable to process returns or exchanges. If you have any questions with regard to sizing or condition of a specific product on our site, please contact us before committing to purchase. Refunds are only processed based on fulfillment errors, such as incorrectly shipped or missing items Refunds are only processed based on fulfillment errors, such as incorrectly shipped or missing items.</p>
    </div>

    </TermsContent>

    </>
  )
}

export default Terms

const TermsContent = styled.div `

display: flex;
justify-content: center;
align-items: center;
padding: 20px;
box-sizing: border-box;
text-align: center;

.everything {
max-width: 800px;
width: 100%;
font-family: "Kanit", sans-serif;
}

@media (max-width: 768px) {
.everything {
    padding: 10px;
}
}
`