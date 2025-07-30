import styled from "styled-components"
import { Link } from "react-router-dom"

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #111111 0%, #000000 100%); /* Slightly different shade */
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    opacity: 0.8;
  }

  /* Add a subtle pattern or texture */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0);
    background-size: 20px 20px;
    pointer-events: none;
  }
`

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: white;

      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`

const AboutSection = styled(FooterSection)`
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #cccccc;
    margin-bottom: 2rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: white;
    color: black;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
  }
`

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.8rem;
  }
`

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    transform: translateX(5px);

    &::before {
      width: 100%;
    }
  }
`

const ExternalLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    transform: translateX(5px);

    &::before {
      width: 100%;
    }
  }
`

const NewsletterSection = styled(FooterSection)`
  p {
    color: #cccccc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  gap: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  border-radius: 0;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`

const NewsletterButton = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: black;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: black;
    transition: left 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: white;
  }

  span {
    position: relative;
    z-index: 2;
  }
`

const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin: 2rem 0;
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: #999;
  font-size: 0.9rem;
  margin: 0;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #cccccc;
    }
  }
`

const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    color: #999;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
`

const PaymentIcon = styled.div`
  width: 40px;
  height: 25px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: black;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter subscription")
  }

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <AboutSection>
            <h3>About JCKicks</h3>
            <p>
              Discover JCKicks, your premier destination for exclusive sneaker resale. We specialize in securing rare
              and coveted kicks from leading brands, catering to enthusiasts and collectors alike. Our dedication to
              quality, authenticity, and unmatched customer service ensures you find the perfect pair every time.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">
                📷
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                🐦
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                📘
              </SocialLink>
              <SocialLink href="#" aria-label="TikTok">
                🎵
              </SocialLink>
            </SocialLinks>
          </AboutSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink to="/Products">Products</FooterLink>
              </li>
              <li>
                <FooterLink to="/Contact">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/Cart">Cart</FooterLink>
              </li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Resources</h3>
            <FooterLinks>
              <li>
                <FooterLink to="/Terms">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink to="/Terms">Return Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/Terms">Shipping Policy</FooterLink>
              </li>
              <li>
                <ExternalLink href="https://render.com/" target="_blank">
                  Powered By Render
                </ExternalLink>
              </li>
            </FooterLinks>
          </FooterSection>

          <NewsletterSection>
            <h3>Stay Updated</h3>
            <p>Subscribe to get notified about new drops and exclusive offers.</p>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput type="email" placeholder="Enter your email" required />
              <NewsletterButton type="submit">
                <span>Subscribe</span>
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            Copyright © 2024 All Rights Reserved by <Link to="/">JCKICKS</Link>
          </Copyright>

          <PaymentMethods>
            <span>We Accept:</span>
            <PaymentIcon>VISA</PaymentIcon>
            <PaymentIcon>MC</PaymentIcon>
            <PaymentIcon>AMEX</PaymentIcon>
            <PaymentIcon>PP</PaymentIcon>
          </PaymentMethods>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer