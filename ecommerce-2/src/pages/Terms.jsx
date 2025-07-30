import styled from "styled-components"

const TermsContainer = styled.div`
  min-height: 100vh;
  padding-top: 120px; /* Account for fixed navbar */
  padding-bottom: 4rem;
`

const TermsContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;s
    height: 3px;
    background: black;
  }
`

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: black;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 1.1;
`

const LastUpdated = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  margin: 0;
  font-style: italic;
`

const ContentWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, black, #333, black);
    border-radius: 12px 12px 0 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
  }
`

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-left: 4px solid black;
  border-radius: 0 8px 8px 0;
  font-weight: 400;
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  margin: 3rem 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: black;
  }

  &:first-of-type {
    margin-top: 0;
  }
`

const SectionContent = styled.div`
  margin-bottom: 2.5rem;

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;
    text-align: justify;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    position: relative;
    z-index: 1;
    color: #f0f0f0 !important;
  }
`

const ImportantNotice = styled.div`
  background: #f8f9fa;
  border: 2px solid black;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  position: relative;

  &::before {
    content: '⚠️';
    position: absolute;
    top: -12px;
    left: 20px;
    background: white;
    padding: 0 10px;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-weight: 500;
    color: #333 !important;
  }
`

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 3rem;
  text-align: center;
  border: 1px solid #dee2e6;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: black;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    color: #666 !important;
    margin: 0;
    font-size: 1rem;
  }
`

function Terms() {
  return (
    <TermsContainer>
      <TermsContent>
        <Header>
          <MainTitle>Terms & Policies</MainTitle>
          <LastUpdated>These Terms of Use are effective from May 10, 2024.</LastUpdated>
        </Header>

        <ContentWrapper>
          <IntroText>
            JCKICKS LLC ("JCKICKS", "we", or "us") operates without limitation. These Terms of Use ("Terms"), along with
            our Privacy Policy, apply to your use of the Site and the services, features and functions that are offered
            and made available on, through, or using the Site or any other property that links to these Terms (together
            with the Site, the "Service"). Users of the Service must be at least 18 years old or have the permission and
            acceptance (to these Terms of Use) of a parent or guardian. Access of the Site or use of the Service by
            anyone under the age of 13 is prohibited even with parental or guardian consent. These Terms constitute a
            legally binding agreement between you and us.
          </IntroText>

          <ImportantNotice>
            <p>
              <strong>
                BY ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTAND, AND ARE BOUND BY THE TERMS
                AND CONDITIONS SET FORTH HEREIN. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE OR ACCESS THE
                SERVICE.
              </strong>
            </p>
          </ImportantNotice>

          <HighlightBox>
            <h3>All Sales Are Final</h3>
            <p>
              All sales are final. No refunds, returns or exchanges will be permitted. If you are concerned about sizing
              for a particular style of shoe, please refer to the manufacturer's size guidelines.
            </p>
          </HighlightBox>

          <SectionTitle>Shipping and Delivery</SectionTitle>
          <SectionContent>
            <p>
              All delivery times are estimates and are not guaranteed. Shipments may be affected by weather-related
              delays, carrier limitations or other events outside of our control. Delivery and processing speeds vary by
              shipping pricing options.
            </p>
            <p>
              Excluding deliveries to PO boxes and military bases, it will typically take 3-5 business days (M-F,
              excluding holidays) for an item, ordered before 2 PM ET with standard shipping, to be delivered to you
              ("buyer") located in the 48 contiguous states. Estimated delivery times do not apply to international
              orders, which vary by country.
            </p>
            <p>
              Once your order ships, you will receive an email notification with your tracking information.
              International customers are responsible for any additional fees or taxes after an item ships. We do our
              best to protect international customers from incurring additional fees, but cannot guarantee against any
              unexpected expenses.
            </p>
          </SectionContent>

          <SectionTitle>Returns Policy</SectionTitle>
          <SectionContent>
            <p>
              All sales with JCKICKS are final. Once an item sells, either online or physically, we are unable to
              process returns or exchanges. If you have any questions with regard to sizing or condition of a specific
              product on our site, please contact us before committing to purchase.
            </p>
            <p>
              Refunds are only processed based on fulfillment errors, such as incorrectly shipped or missing items.
              Refunds are only processed based on fulfillment errors, such as incorrectly shipped or missing items.
            </p>
          </SectionContent>

          <ContactInfo>
            <h3>Questions?</h3>
            <p>
              If you have any questions about these terms and policies, please contact us before making a purchase.
              We're here to help ensure you have the best experience with JCKICKS.
            </p>
          </ContactInfo>
        </ContentWrapper>
      </TermsContent>
    </TermsContainer>
  )
}

export default Terms