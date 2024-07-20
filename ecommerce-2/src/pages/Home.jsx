import React from 'react'
import styled from 'styled-components'
import MilitaryBlack from '../pages/image/militaryblack.webp'
import Jbalvin from '../pages/image/jbalvin.webp'
import Ivory from '../pages/image/ivory.webp'
import VideoBackground from '../components/VideoBackground';
import Bbwwthiteforum from '../pages/image/bbwwhiteforum.webp'
import Darkmocha from '../pages/image/darkmocha.webp'
import NewBred from '../pages/image/newbred.webp'
import Olive from '../pages/image/olive.webp'
import Powerpuffblue from '../pages/image/powerpuffblue.webp'
import Powerpuffgreen from '../pages/image/powerpuffgreen.webp'
import Powerpuffpink from '../pages/image/powerpuffpink.webp'
import Saltemarine from '../pages/image/saltemarine.webp'
import Wonderwhite from '../pages/image/wonderwhite.webp'
import Bone from '../pages/image/bone.webp'
import Canary from '../pages/image/canary.webp'
import Lowmocha from '../pages/image/lowmocha.webp'
import Militaryblue from '../pages/image/militaryblue.webp'
import Onyx from '../pages/image/onyx.webp'
import SanJuan from '../pages/image/sanjuan.webp'
import Saturngold from '../pages/image/saturngold.webp'
import TripleBlack from '../pages/image/tripleblack.webp'
import WhiteCement from '../pages/image/whitecement.webp'



function Home() {
  return (
    <>
    <HomeStyle>
      <main>
      <div className="app">
      <VideoBackground source="image/background-video.mp4" />
      {VideoBackground}
    </div>

            <div class="carousel">
                <div class="wrap">
                    <img src={Bbwwthiteforum} alt="wonderwhite" />
                    <img src={Darkmocha} alt="darkmocha" />
                    <img src={NewBred} alt="newbred" />
                    <img src={Olive} alt="olive" />
                    <img src={Powerpuffblue} alt="powerpuff" />
                    <img src={Powerpuffgreen} alt="powerpuff" />
                    <img src={Powerpuffpink} alt="powerpuff" />
                    <img src={Saltemarine} alt="slides" />
                    <img src={Wonderwhite} alt="wonderwhite" />
                    <img src={Ivory} alt="ivory" />
                    <img src={Jbalvin} alt="jbalvin" />
                    <img src={MilitaryBlack} alt="military" />
                    <img src={Bone} alt="bone" />
                    <img src={Canary} alt="canary" />
                    <img src={Lowmocha} alt="lowmocha" />
                    <img src={Militaryblue} alt="militaryblue" />
                    <img src={Onyx} alt="onyx" />
                    <img src={SanJuan} alt="sanjuan" />
                    <img src={Saturngold} alt="saturngold" />
                    <img src={TripleBlack} alt="tripleblack" />
                    <img src={WhiteCement} alt="whitecememnt" />
                </div>
            </div>

        <section class="section2">

            <h1 class="title">Featured Products</h1>

            <div class="box">
                
            <div class="featuredkicks">
                <img src={Ivory} alt="ivorys" class="images" />
                    <h3>Air Jordan 3 Retro SE Craft - Ivory</h3>
                    <p>$265.00 USD</p>
                <button>Add to Cart</button>
            </div>

            <div class="featuredkicks">
                <img src={Jbalvin} alt="jbalvins" class="images" />
                    <h3>J. Balvin x Air Jordan 3 Retro Medellin Sunset</h3>
                    <p>$400.00 USD</p>
                <button>Add to Cart</button>
            </div>

            <div class="featuredkicks">
                <img src={MilitaryBlack} alt="militaryblack" class="images" />
                    <h3>Air Jordan 4 Retro Military Black</h3>
                    <p class="featuredprice">$350.00 USD</p>
                    <button>Add to Cart</button>
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

.carousel {
  overflow: hidden;
  width: 100%;

}

.wrap {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 400px;
  justify-items: stretch;
  animation: slide 15s linear infinite;
}

.wrap img {
  width: 400px;

  border-radius: 15px;
  object-fit: cover;
}

@keyframes slide {
  to {
      translate: calc(-4 * 250px);
  }
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
  margin: 50px;
  font-family: "Kanit", sans-serif;
}

.images {
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

@media (max-width: 1024px) {
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