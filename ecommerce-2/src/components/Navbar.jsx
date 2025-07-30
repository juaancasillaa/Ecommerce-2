import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.scrolled ? "0 2px 20px rgba(0, 0, 0, 0.3)" : "none")};
`

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px; /* Changed from 70px to 90px */
`

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 3px;
  transition: all 0.4s ease;
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Arial Black', sans-serif;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    letter-spacing: 4px;
    color: white; /* Keep it white on hover */
  }

  /* Remove gradient text effect - keep it simple white */
  /* Glowing underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
    animation: glow 1.5s ease-in-out infinite alternate;
  }

  /* Individual letter animations */
  .letter {
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
    color: white; /* Ensure letters are white */
  }

  &:hover .letter:nth-child(1) { transform: translateY(-3px) rotate(5deg); animation-delay: 0.1s; }
  &:hover .letter:nth-child(2) { transform: translateY(3px) rotate(-3deg); animation-delay: 0.2s; }
  &:hover .letter:nth-child(3) { transform: translateY(-2px) rotate(2deg); animation-delay: 0.3s; }
  &:hover .letter:nth-child(4) { transform: translateY(2px) rotate(-4deg); animation-delay: 0.4s; }
  &:hover .letter:nth-child(5) { transform: translateY(-3px) rotate(3deg); animation-delay: 0.5s; }
  &:hover .letter:nth-child(6) { transform: translateY(3px) rotate(-2deg); animation-delay: 0.6s; }
  &:hover .letter:nth-child(7) { transform: translateY(-2px) rotate(4deg); animation-delay: 0.7s; }

  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
    100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4); }
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 2px;

    &:hover {
      letter-spacing: 3px;
    }
  }
`

const AnimatedLogo = styled.span`
  .letter {
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 90px; /* Changed from 70px to 90px */
    left: 0;
    right: 0;
    background-color: black;
    flex-direction: column;
    padding: 2rem 0;
    gap: 0;
    transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-100%)")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const NavItem = styled.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-child {
      border-bottom: none;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  display: block;

  &:hover {
    /* Remove background color change */
    color: white;
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
    background-color: white; /* Keep underline white */
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 0;

    &::after {
      display: none;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      transform: none;
    }
  }
`

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const HamburgerIcon = styled.div`
  width: 24px;
  height: 18px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.isOpen ? "8px" : "0px")};
      transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      top: 8px;
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
      left: ${(props) => (props.isOpen ? "-30px" : "0px")};
    }

    &:nth-child(3) {
      top: ${(props) => (props.isOpen ? "8px" : "16px")};
      transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(0deg)")};
    }
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transition: opacity 0.3s ease;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOverlayClick = () => {
    setIsOpen(false)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavbarContent>
          <Logo to="/">
            <AnimatedLogo>
              <span className="letter">J</span>
              <span className="letter">C</span>
              <span className="letter">K</span>
              <span className="letter">I</span>
              <span className="letter">C</span>
              <span className="letter">K</span>
              <span className="letter">S</span>
            </AnimatedLogo>
          </Logo>

          <NavLinks isOpen={isOpen}>
            <NavItem>
              <NavLink to="/" onClick={handleLinkClick}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Products" onClick={handleLinkClick}>
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </NavItem>
          </NavLinks>

          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon isOpen={isOpen}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerIcon>
          </HamburgerButton>
        </NavbarContent>
      </NavbarContainer>

      <Overlay isOpen={isOpen} onClick={handleOverlayClick} />
    </>
  )
}

export default Navbar