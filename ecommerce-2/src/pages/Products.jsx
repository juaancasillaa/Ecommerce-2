import { useEffect, useState } from "react";
import styled from "styled-components";

function Products() {
  const [items, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let filtered = items;

    if (priceFilter !== "all") {
      filtered = filtered.filter((item) => {
        // Update the condition to match the new option values
        if (priceFilter === "$0.00 - $500.00") return item.price <= 500;
        if (priceFilter === "$500.00 - $1000.00") return item.price > 500 && item.price <= 1000;
        return true; // Ensure a boolean is always returned
      });
    }

    setFilteredItems(filtered);
  }, [items, priceFilter]);

  return (
    <main>
      <ProductsContainer>
        <h1 className="title">Featured Products</h1>
        <FilterContainer>
            <label>Price: </label>
            <select onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="all">All</option>
              {/* Update option values to match filtering logic */}
              <option value="$0.00 - $500.00">$0.00 - $500.00</option>
              <option value="$500.00 - $1000.00">$500.00 - $1000.00</option>
            </select>
        </FilterContainer>
        {renderProducts(filteredItems)}
      </ProductsContainer>
    </main>
  );

  function renderProducts(items) {
    return (
      <>
        <div className="box">
          {items.map((item, i) => (
            <div key={i} className="featuredkicks">
              <img src={item.image} alt={item.name} className="image" />
              <h1>{item.name}</h1>
              <h3>{item.description}</h3>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Products;

const FilterContainer = styled.div`

  font-family: "Kanit", sans-serif;
  font-size: 20px;
  color: black;
  display: flex;
  justify-content: start;
  margin-left: 50px;
  gap: 10px;

  select {
    font-family: "Kanit", sans-serif;
    background-color: #2E8BC0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ProductsContainer = styled.main`
  * {
    font-family: "Kanit", sans-serif;
  }

  .title {
    margin: 100px;
    padding: 30px;
    font-family: "Kanit", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    text-align: center;
  }

  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 50px;
    font-family: "Kanit", sans-serif;
  }

  .image {
    border-radius: 10px;
    width: 400px;
  }

  .featuredkicks {
    background-color: #EEEDE7;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    font-family: "Kanit", sans-serif;
    color: black;
    font-weight: 400;
    font-style: normal;
    padding: 50px;
  }

  .featuredkicks:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  p {
    font-size: 20px;
  }

  button {
    font-size: 15px;
    text-align: center;
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: white;
    color: black;
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 3px;
  }

  button:hover {
    cursor: pointer;
    background-color: #2E8BC0;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    .title {
      margin: 50px 0;
      font-size: 40px;
    }

    .box {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .image {
      width: 300px;
      height: 200px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .title {
      margin: 70px 0;
    }

    .box {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .image {
      width: 500px;
      height: 400px;
    }
  }
`