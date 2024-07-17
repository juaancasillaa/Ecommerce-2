import React from 'react'
import styled from 'styled-components'
import MilitaryBlack from '../pages/image/militaryblack.webp'
import Jbalvin from '../pages/image/jbalvin.webp'
import Ivory from '../pages/image/ivory.webp'
import VideoBackground from '../components/VideoBackground';

function Home() {
  return (
    <>
    <HomeStyle>
      <main>
      <div className="app">
      <VideoBackground source="image/background-video.mp4" />
      {VideoBackground}
    </div>

        <section class="section2">

            <h1 class="title">Featured Products</h1>

            <div class="box">
                
            <div class="featuredkicks">
                <img src={Ivory} alt="ivorys" class="images" />
                    <h3>Air Jordan 3 Retro SE Craft - Ivory</h3>
                    <p>$265.00 USD</p>
                <button class="btn">Add to Cart</button>
            </div>

            <div class="featuredkicks">
                <img src={Jbalvin} alt="jbalvins" class="images" />
                    <h3>J. Balvin x Air Jordan 3 Retro Medellin Sunset</h3>
                    <p>$400.00 USD</p>
                <button class="btn">Add to Cart</button>
            </div>

            <div class="featuredkicks">
                <img src={MilitaryBlack} alt="militaryblack" class="images" />
                    <h3>Air Jordan 4 Retro Military Black</h3>
                    <p class="featuredprice">$350.00 USD</p>
                    <button class="btn">Add to Cart</button>
            </div>
            
            </div>
        </section>
    </main>
    </HomeStyle>
    </>
  )
}

export default Home

const HomeStyle = styled.main `

video {
  width: 100%;
  height: 100%;
}

.title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
}

.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  margin: 100px;
}

.images {
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

.btn {
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

.btn:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}

@media (max-width: 767px) {
  
  .logo {
      padding: 0;
      font-size: 50px; 
  }

  .title {
      margin: 50px 0;
      font-size: 40px;
  }
  .box {
      display: flex;
      align-items: center;
      flex-direction: column;
  }
  .images {
      width: 300px;
      height: 200px;
  }

  video {
      width: 100%;
      height: 100%;
  }

}

@media screen and (min-width: 768px) and (max-width: 1826px) {

  video {
      width: 100%;
  }

  .title {
      margin: 70px 0;
  }

  .box {
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  .images {
      width: 500px;
      height: 400px;
  }
}

`