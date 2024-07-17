import { useEffect, useState } from "react";
import styled from "styled-components";

function Products() {
    const [items, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/items")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    function renderProducts(items) {
        return (
        <>
          <ProductsContainer>
            <h1 class="title">Featured Products</h1>
            <div class="box">
              {items.map((items, i) => (
                <div key={i} class="featuredkicks">
                  <img src={items.image} alt={items.name} class="image"/>
                  <h1>{items.name}</h1>
                  <h3>{items.description}</h3>
                  <p>${items.price}</p>
                  <button>Add to Cart</button>
                </div>
            ))}
            </div>
          </ ProductsContainer>
        </>
        );
      }

      return (
        <main>
            {renderProducts(items)}
        </main>
      );
}

export default Products;

const ProductsContainer = styled.main `

* {
  font-family: "Kanit", sans-serif;
}

.title{
  margin: 100px;
  padding: 30px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
}

.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 100px;
  font-family: "Kanit", sans-serif;
}

.image {
  width: 400px;
}

.featuredkicks {
  font-size: 15px;
  text-align: center;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 20px;
}

.featuredkicks:hover {
  cursor: pointer;
  animation: pulse;
  animation-duration: 2s;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

button {
  font-size: 15px;
  text-align: center;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: black;
  color: white;
  border: none;
  padding: 8px;
  margin: 10px;
  border-radius: 3px;
}

button:hover {
  cursor: pointer;
  background-color: white;
  color: black;
  text-decoration: underline;
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