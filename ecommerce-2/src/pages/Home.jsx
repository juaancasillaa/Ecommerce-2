import { useState } from "react"
import styled from "styled-components"
import VideoBackground from "../components/VideoBackground"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

// Import your images (you'll need to adjust these paths)
import MilitaryBlack from "../pages/image/militaryblack.webp"
import Jbalvin from "../pages/image/jbalvin.webp"
import Ivory from "../pages/image/ivory.webp"
import Bbwwthiteforum from "../pages/image/bbwwhiteforum.webp"
import Darkmocha from "../pages/image/darkmocha.webp"
import NewBred from "../pages/image/newbred.webp"

const HomeContainer = styled.main`
  background-color: white;
  color: black;
  overflow-x: hidden;
`

// Hero Section with Video Background
const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Video styling */
  #myVideo {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    filter: grayscale(100%) brightness(0.4);
  }

  /* Dark overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
`

const HeroContent = styled.div`
  text-align: center;
  z-index: 3;
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
`

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  line-height: 0.9;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  .highlight {
    background: linear-gradient(45deg, white, #cccccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`

const CTAButton = styled.button`
  background-color: white;
  color: black;
  border: 2px solid white;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0;
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
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  span {
    position: relative;
    z-index: 2;
  }
`

// Floating Carousel Section
const CarouselSection = styled.section`
  padding: 5rem 0;
  background-color: black;
  position: relative;
  overflow: hidden;
`

const CarouselTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const FloatingCarousel = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, black, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, black, transparent);
  }
`

const CarouselTrack = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  gap: 2rem;

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`

const CarouselItem = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }
`

// Featured Products Section
const FeaturedSection = styled.section`
  padding: 8rem 2rem;
  background-color: white;
  max-width: 1400px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: 900;
  color: black;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
`

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`

const ProductCard = styled.div`
  background-color: white;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: black;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const ProductInfo = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`

const ProductName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1.5rem;
`

const AddToCartButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
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
    background: white;
    transition: left 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: black;
    border: 2px solid black;
  }

  span {
    position: relative;
    z-index: 2;
  }
`

// Stats Section
const StatsSection = styled.section`
  background-color: black;
  color: white;
  padding: 5rem 2rem;
  margin-bottom: 0; /* Remove any margin */
  position: relative;

  /* Add a subtle bottom border for separation */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  text-align: center;
`

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    color: white;
  }

  p {
    font-size: 1.1rem;
    color: #cccccc;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

// Trust & Brands Section
const TrustSection = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  }
`

const TrustContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const TrustHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

const TrustTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: black;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;

  .highlight {
    background: linear-gradient(45deg, #333, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const TrustSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;
`

const TrustCard = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: black;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`

const TrustIcon = styled.div`
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
  transition: all 0.3s ease;

  ${TrustCard}:hover & {
    transform: scale(1.1);
    background: #333;
  }
`

const TrustCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const TrustCardText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
`

const BrandsSection = styled.div`
  text-align: center;
`

const BrandsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const BrandItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  font-size: 1.2rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: black;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`

const TestimonialSection = styled.div`
  margin-top: 6rem;
  background: black;
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
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
`

const TestimonialContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #f0f0f0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: white;
    font-weight: bold;
  }
`

const TestimonialAuthor = styled.cite`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-style: normal;
`

const TestimonialStars = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #ffd700;
`
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Air Jordan 3 Retro SE Craft - Ivory",
      price: "$265.00 USD",
      image: Ivory,
    },
    {
      id: 2,
      name: "J. Balvin x Air Jordan 3 Retro Medellin Sunset",
      price: "$400.00 USD",
      image: Jbalvin,
    },
    {
      id: 3,
      name: "Air Jordan 4 Retro Military Black",
      price: "$350.00 USD",
      image: MilitaryBlack,
    },
  ]

  // Carousel images (duplicate for infinite scroll)
  const carouselImages = [
    Bbwwthiteforum,
    Darkmocha,
    NewBred,
    Ivory,
    Jbalvin,
    MilitaryBlack,
    Bbwwthiteforum,
    Darkmocha,
    NewBred,
    Ivory,
    Jbalvin,
    MilitaryBlack,
  ]

  return (
    <HomeContainer>
      {/* Hero Section with Video Background */}
      <HeroSection>
        <VideoBackground source="image/background-video.mp4" />
        <HeroContent>
          <HeroTitle>
            STEP INTO <span className="highlight">GREATNESS</span>
          </HeroTitle>
          <HeroSubtitle>Premium sneakers for the modern athlete</HeroSubtitle>
          <CTAButton>
            <span>Shop Collection</span>
          </CTAButton>
        </HeroContent>
      </HeroSection>

      {/* Floating Carousel */}
      <CarouselSection>
        <CarouselTitle>Latest Drops</CarouselTitle>
        <FloatingCarousel>
          <CarouselTrack>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image || "/placeholder.svg"} alt={`Sneaker ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </FloatingCarousel>
      </CarouselSection>

      {/* Featured Products */}
      <FeaturedSection>
        <SectionTitle>Featured</SectionTitle>
        <SectionSubtitle>Discover our handpicked selection of premium sneakers</SectionSubtitle>

        <ProductGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
              </ProductImage>
              <ProductInfo>
                <div>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </div>
                <AddToCartButton>
                  <span>Add to Cart</span>
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </FeaturedSection>

      {/* Stats Section */}
      <StatsSection>
        <StatsContainer>
          <StatItem>
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </StatItem>
          <StatItem>
            <h3>500+</h3>
            <p>Premium Sneakers</p>
          </StatItem>
          <StatItem>
            <h3>50+</h3>
            <p>Top Brands</p>
          </StatItem>
          <StatItem>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </StatItem>
        </StatsContainer>
      </StatsSection>

      {/* Trust & Brands Section */}
      <TrustSection>
        <TrustContainer>
          <TrustHeader>
            <TrustTitle>
              Why Choose <span className="highlight">JCKICKS</span>
            </TrustTitle>
            <TrustSubtitle>
              We're not just another sneaker store. We're your trusted partner in finding authentic, premium kicks.
            </TrustSubtitle>
          </TrustHeader>

          <TrustGrid>
            <TrustCard>
              <TrustIcon>🔒</TrustIcon>
              <TrustCardTitle>100% Authentic</TrustCardTitle>
              <TrustCardText>
                Every sneaker is thoroughly authenticated by our expert team. We guarantee the authenticity of every
                pair or your money back.
              </TrustCardText>
            </TrustCard>

            <TrustCard>
              <TrustIcon>⚡</TrustIcon>
              <TrustCardTitle>Lightning Fast</TrustCardTitle>
              <TrustCardText>
                Get your kicks delivered in 2-3 business days. We know you can't wait to rock your new sneakers.
              </TrustCardText>
            </TrustCard>

            <TrustCard>
              <TrustIcon>💎</TrustIcon>
              <TrustCardTitle>Premium Quality</TrustCardTitle>
              <TrustCardText>
                We only source the highest quality sneakers. Each pair is carefully inspected before shipping to you.
              </TrustCardText>
            </TrustCard>
          </TrustGrid>

          <BrandsSection>
            <BrandsTitle>Trusted Brands We Carry</BrandsTitle>
            <BrandsGrid>
              <BrandItem>Nike</BrandItem>
              <BrandItem>Jordan</BrandItem>
              <BrandItem>Adidas</BrandItem>
              <BrandItem>Yeezy</BrandItem>
              <BrandItem>New Balance</BrandItem>
              <BrandItem>Converse</BrandItem>
            </BrandsGrid>
          </BrandsSection>

          <TestimonialSection>
            <TestimonialContent>
              <TestimonialQuote>
                JCKICKS is the only place I trust for authentic sneakers. Their authentication process is thorough and
                their customer service is unmatched. I've bought over 20 pairs and every single one has been perfect.
              </TestimonialQuote>
              <TestimonialStars>⭐⭐⭐⭐⭐</TestimonialStars>
              <TestimonialAuthor>- Marcus Johnson, Verified Customer</TestimonialAuthor>
            </TestimonialContent>
          </TestimonialSection>
        </TrustContainer>
      </TrustSection>
    </HomeContainer>
  )
}

export default Home