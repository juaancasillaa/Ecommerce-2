import { useEffect, useState } from "react"
import styled from "styled-components"

// Import all your images
import BbwWhiteForum from "../pages/image/bbwwhiteforum.webp"
import Bone from "../pages/image/bone.webp"
import Canary from "../pages/image/canary.webp"
import DarkMocha from "../pages/image/darkmocha.webp"
import Ivory from "../pages/image/ivory.webp"
import JBalvin from "../pages/image/jbalvin.webp"
import LowMocha from "../pages/image/lowmocha.webp"
import MilitaryBlack from "../pages/image/militaryblack.webp"
import MilitaryBlue from "../pages/image/militaryblue.webp"
import NewBred from "../pages/image/newbred.webp"
import Olive from "../pages/image/olive.webp"
import Onyx from "../pages/image/onyx.webp"
import PowerPuffBlue from "../pages/image/powerpuffblue.webp"
import PowerPuffGreen from "../pages/image/powerpuffgreen.webp"
import PowerPuffPink from "../pages/image/powerpuffpink.webp"
import SalteMarine from "../pages/image/saltemarine.webp"
import SanJuan from "../pages/image/sanjuan.webp"
import SaturnGold from "../pages/image/saturngold.webp"
import TravisBck from "../pages/image/travisbck.webp"
import TripleBlack from "../pages/image/tripleblack.webp"
import WhiteCement from "../pages/image/whitecement.webp"
import WonderWhite from "../pages/image/wonderwhite.webp"

const ProductsContainer = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding-top: 120px;
  padding-bottom: 4rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: black;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  position: relative;
  line-height: 1.1;
`

const HeaderDivider = styled.div`
  width: 100px;
  height: 1px;
  background: black;
  margin: 0 auto;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  font-weight: 400;
`

const SearchAndFiltersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 600px;
    width: 100%;
  }
`

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3.5rem;
  font-size: 1.1rem;
  border: 2px solid transparent;
  border-radius: 16px;
  background: white;
  color: black;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  outline: none;

  &:focus {
    border-color: transparent;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  &:hover:not(:focus) {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
    font-weight: 400;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
  pointer-events: none;
  z-index: 1;
  transition: color 0.3s ease;

  ${SearchInput}:focus + & {
    color: black;
  }
`

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.1s ease;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: black;
    transform: translateY(-50%) scale(1.1);
  }
`

const SearchSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 0.5rem;
  display: ${(props) => (props.show ? "block" : "none")};
  backdrop-filter: blur(10px);
`

const SuggestionItem = styled.div`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.1s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.02);
    transform: translateX(8px);
  }

  &:first-child {
    border-radius: 16px 16px 0 0;
  }

  &:last-child {
    border-radius: 0 0 16px 16px;
  }

  .suggestion-image {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .suggestion-text {
    flex: 1;

    .suggestion-name {
      font-weight: 600;
      color: black;
      font-size: 0.95rem;
      margin-bottom: 0.2rem;
    }

    .suggestion-price {
      color: #666;
      font-size: 0.85rem;
    }
  }
`

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const FilterSelect = styled.select`
  background: white;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  outline: none;

  &:focus {
    border-color: transparent;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  &:hover:not(:focus) {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  option {
    padding: 0.5rem;
    font-weight: 500;
  }
`

const SearchResultsInfo = styled.div`
  max-width: 1400px;
  margin: 0 auto 2rem;
  padding: 0 2rem;
  text-align: center;
  color: #666;
  font-size: 1rem;

  .search-term {
    font-weight: 600;
    color: black;
  }

  .results-count {
    font-weight: 600;
    color: black;
  }
`

const ProductsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ProductCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.1s ease-out;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, black, #333);
    transform: scaleX(0);
    transition: transform 0.1s ease-out;
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

    &::before {
      transform: scaleX(1);
    }
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 20px 20px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.1s ease-out;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`

const ProductInfo = styled.div`
  padding: 2rem;
  text-align: center;
`

const ProductName = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: black;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
  margin-bottom: 1rem;
`

const ProductBrand = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.05);
  color: #666;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  transition: all 0.1s ease-out;

  ${ProductCard}:hover & {
    background: rgba(0, 0, 0, 0.08);
    color: black;
  }
`

const AddToCartButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.1s ease-out;
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
    transition: left 0.1s ease-out;
    z-index: 1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: black;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  span {
    position: relative;
    z-index: 2;
  }
`

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.2rem;

  h3 {
    color: black;
    margin-bottom: 1rem;
  }

  .search-suggestions {
    margin-top: 2rem;

    h4 {
      color: black;
      margin-bottom: 1rem;
    }

    .suggestion-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      justify-content: center;

      .tag {
        background: white;
        color: #666;
        padding: 0.6rem 1.2rem;
        border-radius: 20px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.05);

        &:hover {
          background: black;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
`

const LoadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
`

const LoadMoreButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: left 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: black;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  span {
    position: relative;
    z-index: 2;
  }
`

const LoadMoreIcon = styled.span`
  position: relative;
  z-index: 2;
  font-size: 1.2rem;
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  ${LoadMoreButton}:hover & {
    transform: translateY(4px);
  }
`

const ItemsCounter = styled.p`
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
`

function Products() {
  // Complete product data with all 22 items
  const mockProducts = [
    {
      id: 1,
      name: "Adidas Forum Low White",
      description: "Classic basketball silhouette in clean white leather with iconic three stripes branding.",
      price: 180,
      type: "Forum",
      image: BbwWhiteForum,
      keywords: ["adidas", "forum", "low", "white", "basketball", "classic", "leather"],
    },
    {
      id: 2,
      name: "Yeezy Boost 350 V2 Bone",
      description: "Minimalist design meets maximum comfort in this neutral bone colorway with Primeknit upper.",
      price: 220,
      type: "Yeezy",
      image: Bone,
      keywords: ["yeezy", "boost", "350", "v2", "bone", "neutral", "primeknit", "kanye"],
    },
    {
      id: 3,
      name: "Yeezy Boost 350 V2 Canary",
      description: "Bold canary yellow colorway that makes a statement with premium Primeknit construction.",
      price: 240,
      type: "Yeezy",
      image: Canary,
      keywords: ["yeezy", "boost", "350", "v2", "canary", "yellow", "bold", "primeknit"],
    },{
      id: 4,
      name: "Travis Scott x Air Jordan 1 Dark Mocha",
      description: "Highly coveted collaboration featuring reversed swoosh and premium suede in dark mocha.",
      price: 850,
      type: "Jordan",
      image: DarkMocha,
      keywords: [
        "travis",
        "scott",
        "air",
        "jordan",
        "1",
        "dark",
        "mocha",
        "collaboration",
        "reversed",
        "swoosh",
        "suede",
      ],
    },
    {
      id: 5,
      name: "Air Jordan 3 Retro SE Craft Ivory",
      description: "Premium craft construction with luxurious ivory leather and classic elephant print details.",
      price: 265,
      type: "Jordan",
      image: Ivory,
      keywords: ["air", "jordan", "3", "retro", "se", "craft", "ivory", "premium", "leather", "elephant"],
    },
    {
      id: 6,
      name: "J. Balvin x Air Jordan 3 Medellin Sunset",
      description: "Limited edition collaboration featuring vibrant sunset colors and exclusive J. Balvin branding.",
      price: 400,
      type: "Jordan",
      image: JBalvin,
      keywords: ["j", "balvin", "air", "jordan", "3", "medellin", "sunset", "collaboration", "vibrant", "limited"],
    },
    {
      id: 7,
      name: "Travis Scott x Air Jordan 1 Low Mocha",
      description: "Low-top version of the coveted Travis Scott collaboration in rich mocha suede.",
      price: 650,
      type: "Jordan",
      image: LowMocha,
      keywords: ["travis", "scott", "air", "jordan", "1", "low", "mocha", "collaboration", "suede"],
    },
    {
      id: 8,
      name: "Air Jordan 4 Retro Military Black",
      description:
        "Classic military-inspired colorway with premium leather construction and iconic Air Jordan styling.",
      price: 350,
      type: "Jordan",
      image: MilitaryBlack,
      keywords: ["air", "jordan", "4", "retro", "military", "black", "classic", "leather", "premium"],
    },
    {
      id: 9,
      name: "Air Jordan 4 Retro Military Blue",
      description: "Timeless military blue colorway with white midsole and classic Jordan 4 silhouette.",
      price: 340,
      type: "Jordan",
      image: MilitaryBlue,
      keywords: ["air", "jordan", "4", "retro", "military", "blue", "timeless", "white", "midsole"],
    },
    {
      id: 10,
      name: "Air Jordan 1 Retro High Bred",
      description: "The legendary 'Bred' colorway that started it all, featuring classic black and red styling.",
      price: 320,
      type: "Jordan",
      image: NewBred,
      keywords: ["air", "jordan", "1", "retro", "high", "bred", "legendary", "black", "red", "classic"],
    },
    {
      id: 11,
      name: "Yeezy Boost 350 V2 Olive",
      description: "Earth-toned olive colorway perfect for versatile styling with signature Boost cushioning.",
      price: 230,
      type: "Yeezy",
      image: Olive,
      keywords: ["yeezy", "boost", "350", "v2", "olive", "earth", "versatile", "cushioning"],
    },
    {
      id: 12,
      name: "Yeezy Boost 350 V2 Onyx",
      description: "Sleek all-black onyx colorway with subtle pattern details and premium Primeknit upper.",
      price: 220,
      type: "Yeezy",
      image: Onyx,
      keywords: ["yeezy", "boost", "350", "v2", "onyx", "black", "sleek", "pattern", "primeknit"],
    },
    {
      id: 13,
      name: "Powerpuff Girls x Nike Dunk Low Blue",
      description: "Playful collaboration inspired by Bubbles with premium blue leather and cartoon details.",
      price: 280,
      type: "Dunks",
      image: PowerPuffBlue,
      keywords: ["powerpuff", "girls", "nike", "dunk", "low", "blue", "bubbles", "collaboration", "cartoon"],
    },
    {
      id: 14,
      name: "Powerpuff Girls x Nike Dunk Low Green",
      description: "Buttercup-inspired green colorway with premium materials and nostalgic cartoon branding.",
      price: 280,
      type: "Dunks",
      image: PowerPuffGreen,
      keywords: ["powerpuff", "girls", "nike", "dunk", "low", "green", "buttercup", "cartoon", "nostalgic"],
    },
    {
      id: 15,
      name: "Powerpuff Girls x Nike Dunk Low Pink",
      description: "Blossom-themed pink colorway featuring premium leather and exclusive Powerpuff Girls details.",
      price: 280,
      type: "Dunks",
      image: PowerPuffPink,
      keywords: ["powerpuff", "girls", "nike", "dunk", "low", "pink", "blossom", "premium", "leather"],
    },
    {
      id: 16,
      name: "Yeezy Boost 350 V2 Salt Marine",
      description: "Sophisticated salt and marine blue colorway with translucent stripe and Boost technology.",
      price: 235,
      type: "Yeezy",
      image: SalteMarine,
      keywords: ["yeezy", "boost", "350", "v2", "salt", "marine", "blue", "sophisticated", "translucent"],
    },
    {
      id: 17,
      name: "Nike Dunk Low San Juan",
      description: "Tropical-inspired San Juan colorway with premium leather construction and classic Dunk styling.",
      price: 190,
      type: "Dunks",
      image: SanJuan,
      keywords: ["nike", "dunk", "low", "san", "juan", "tropical", "premium", "leather", "classic"],
    },
    {
      id: 18,
      name: "Yeezy Boost 350 V2 Saturn Gold",
      description: "Luxurious saturn gold colorway with metallic accents and signature Primeknit construction.",
      price: 250,
      type: "Yeezy",
      image: SaturnGold,
      keywords: ["yeezy", "boost", "350", "v2", "saturn", "gold", "luxurious", "metallic", "primeknit"],
    },
    {
      id: 19,
      name: "Travis Scott x Air Jordan 1 Backwards Swoosh",
      description: "Iconic Travis Scott collaboration featuring the famous backwards swoosh and premium materials.",
      price: 900,
      type: "Jordan",
      image: TravisBck,
      keywords: ["travis", "scott", "air", "jordan", "1", "backwards", "swoosh", "iconic", "collaboration"],
    },
    {
      id: 20,
      name: "Yeezy Boost 350 V2 Triple Black",
      description: "Stealthy all-black colorway with tonal details and signature Boost cushioning technology.",
      price: 220,
      type: "Yeezy",
      image: TripleBlack,
      keywords: ["yeezy", "boost", "350", "v2", "triple", "black", "stealthy", "tonal", "cushioning"],
    },
    {
      id: 21,
      name: "Air Jordan 3 Retro White Cement",
      description: "Classic white cement colorway with iconic elephant print and premium leather construction.",
      price: 300,
      type: "Jordan",
      image: WhiteCement,
      keywords: ["air", "jordan", "3", "retro", "white", "cement", "classic", "elephant", "print", "leather"],
    },
    {
      id: 22,
      name: "Nike Dunk Low Wonder White",
      description: "Clean wonder white colorway with premium leather upper and classic Dunk Low silhouette.",
      price: 170,
      type: "Dunks",
      image: WonderWhite,
      keywords: ["nike", "dunk", "low", "wonder", "white", "clean", "premium", "leather", "classic"],
    },
  ]

  const [items, setProducts] = useState(mockProducts)
  const [filteredItems, setFilteredItems] = useState(mockProducts)
  const [priceFilter, setPriceFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [visibleItems, setVisibleItems] = useState(9)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const itemsPerLoad = 9

  // Intelligent search function
  const intelligentSearch = (query, items) => {
    if (!query.trim()) return items
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/)

    return items
      .map((item) => {
        let score = 0
        const itemName = item.name.toLowerCase()
        const itemKeywords = item.keywords || []
        const itemType = item.type.toLowerCase()
        const itemDescription = item.description.toLowerCase()

        // Exact name match (highest score)
        if (itemName.includes(query.toLowerCase())) {
          score += 100
        }

        // Check each search term
        searchTerms.forEach((term) => {
          // Exact keyword match
          if (itemKeywords.some((keyword) => keyword === term)) {
            score += 50
          }

          // Partial keyword match
          if (itemKeywords.some((keyword) => keyword.includes(term))) {
            score += 30
          }

          // Name contains term
          if (itemName.includes(term)) {
            score += 40
          }

          // Type match
          if (itemType.includes(term)) {
            score += 35
          }

          // Description contains term
          if (itemDescription.includes(term)) {
            score += 20
          }

          // Fuzzy matching for common misspellings
          const fuzzyMatches = {
            jordan: ["jordon", "jorden"],
            yeezy: ["yezy", "yezzy"],
            travis: ["traivs", "traviss"],
            scott: ["scot", "scoot"],
            nike: ["nke", "nik"],
            adidas: ["addidas", "adidass"],
          }

          Object.entries(fuzzyMatches).forEach(([correct, variations]) => {
            if (variations.includes(term) && (itemName.includes(correct) || itemKeywords.includes(correct))) {
              score += 25
            }
          })
        })

        return { ...item, searchScore: score }
      })
      .filter((item) => item.searchScore > 0)
      .sort((a, b) => b.searchScore - a.searchScore)
  }

  // Generate search suggestions
  const generateSuggestions = (query) => {
    if (!query.trim() || query.length < 2) return []

    const searchResults = intelligentSearch(query, items)
    return searchResults.slice(0, 5) // Show top 5 suggestions
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim() && value.length >= 2) {
      const newSuggestions = generateSuggestions(value)
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
      setSuggestions([])
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name)
    setShowSuggestions(false)
    setSuggestions([])
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
    setSuggestions([])
  }

  // Handle search suggestion tags
  const handleSuggestionTag = (tag) => {
    setSearchQuery(tag)
    setShowSuggestions(false)
  }

  useEffect(() => {
    let filtered = items

    // Apply search filter first
    if (searchQuery.trim()) {
      filtered = intelligentSearch(searchQuery, filtered)
    }

    // Apply price filter
    if (priceFilter !== "all") {
      filtered = filtered.filter((item) => {
        if (priceFilter === "$0.00 - $250.00") return item.price <= 250
        if (priceFilter === "$250.00 - $500.00") return item.price > 250 && item.price <= 500
        if (priceFilter === "$500.00+") return item.price > 500
        return true
      })
    }

    // Apply type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((item) => item.type === typeFilter)
    }

    setFilteredItems(filtered)
    setVisibleItems(9) // Reset to show 9 items when filters change
  }, [items, priceFilter, typeFilter, searchQuery])

  // Popular search terms for no results suggestions
  const popularSearchTerms = ["Jordan", "Yeezy", "Travis Scott", "Dunk", "Military", "White", "Black", "Blue", "Boost"]

  return (
    <ProductsContainer>
      <Header>
        <Title>Featured Products</Title>
        <HeaderDivider />
      </Header>

      {/* Search and Filters Container */}
      <SearchAndFiltersContainer>
        <SearchContainer>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="Search for sneakers..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <SearchIcon>🔍</SearchIcon>
            <ClearButton show={searchQuery.length > 0} onClick={clearSearch}>
              ×
            </ClearButton>
          </SearchInputWrapper>

          <SearchSuggestions show={showSuggestions && suggestions.length > 0}>
            {suggestions.map((suggestion) => (
              <SuggestionItem key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                <img src={suggestion.image || "/placeholder.svg"} alt={suggestion.name} className="suggestion-image" />
                <div className="suggestion-text">
                  <div className="suggestion-name">{suggestion.name}</div>
                  <div className="suggestion-price">${suggestion.price}.00 USD</div>
                </div>
              </SuggestionItem>
            ))}
          </SearchSuggestions>
        </SearchContainer>

        <FilterContainer>
          <FilterSelect onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}>
            <option value="all">Filter by Price</option>
            <option value="$0.00 - $250.00">$0.00 - $250.00</option>
            <option value="$250.00 - $500.00">$250.00 - $500.00</option>
            <option value="$500.00+">$500.00+</option>
          </FilterSelect>

          <FilterSelect onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
            <option value="all">Sort by Brand</option>
            <option value="Jordan">Jordan</option>
            <option value="Yeezy">Yeezy</option>
            <option value="Dunks">Dunks</option>
            <option value="Forum">Forum</option>
          </FilterSelect>
        </FilterContainer>
      </SearchAndFiltersContainer>

      {/* Search Results Info */}
      {searchQuery.trim() && (
        <SearchResultsInfo>
          {filteredItems.length > 0 ? (
            <>
              Found <span className="results-count">{filteredItems.length}</span> result
              {filteredItems.length !== 1 ? "s" : ""} for "<span className="search-term">{searchQuery}</span>"
            </>
          ) : (
            <>
              No results found for "<span className="search-term">{searchQuery}</span>"
            </>
          )}
        </SearchResultsInfo>
      )}

      <ProductsGrid>
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, visibleItems).map((item) => (
            <ProductCard key={item.id}>
              <ProductImage>
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </ProductImage>
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductDescription>{item.description}</ProductDescription>
                <ProductBrand>{item.type}</ProductBrand>
                <ProductPrice>${item.price}.00 USD</ProductPrice>
                <AddToCartButton>
                  <span>Add to Cart</span>
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))
        ) : (
          <NoResults>
            <h3>No products found</h3>
            {searchQuery.trim() ? (
              <>
                <p>We couldn't find any sneakers matching "{searchQuery}"</p>
                <div className="search-suggestions">
                  <h4>Try searching for:</h4>
                  <div className="suggestion-tags">
                    {popularSearchTerms.map((term) => (
                      <span key={term} className="tag" onClick={() => handleSuggestionTag(term)}>
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p>Try adjusting your filters to see more results.</p>
            )}
          </NoResults>
        )}
      </ProductsGrid>

      {/* Load More Button */}
      {filteredItems.length > visibleItems && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={() => setVisibleItems((prev) => prev + itemsPerLoad)}>
            <span>Load More Products</span>
            <LoadMoreIcon>↓</LoadMoreIcon>
          </LoadMoreButton>
          <ItemsCounter>
            Showing {Math.min(visibleItems, filteredItems.length)} of {filteredItems.length} products
          </ItemsCounter>
        </LoadMoreContainer>
      )}
    </ProductsContainer>
  )
}

export default Products