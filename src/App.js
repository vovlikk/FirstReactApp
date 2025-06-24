import React, { useState } from "react";
import Header from './Header.jsx';
import FistPage from './img/popular-rolls.png';
import HomeSushi from './img/home-sushi.png';
import AboutSushi from './img/about-sushi 1.png';
import AboutSmallSushi from './img/about-sushi-title 1.png';
import OrderModel from './logic/OrderModel.js';
import PopularSushi1 from './img/sushirollspopular 1.png';
import PopularSushi2 from './img/sushirollspopular 2.png';
import PopularSushi3 from './img/sushirollspopular 3.png';
import Recentlysalmonsushi from './img/recentlysalmonsushi 1.png';
import Newssushi from './img/newssushi 1.png';
import logo from './img/logo.png';
import conect1 from './img/Frame 92.png';
import conect2 from './img/Frame 93.png';

function App() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <section className="Home" id="home">
          <div className="textusual">

            <h1 className="homeh1">Enjoy Delicious </h1>

            <div className="logotext">
              <img className="homesushiimg" src={HomeSushi} alt="Home sushi" />
              <h3>Sushi Food</h3>
            </div>
            <p className="p-home">
              Enjoy a good dinner with the best<br />
              dishes in the restaurant and improve<br />
              your day.
            </p>

            <button className="btnhome" onClick={() => setShowOrderModal(true)}>
              Order Now
            </button>
          </div>
          <img className="firstphoto" src={FistPage} alt="Popular rolls" />
        </section>

        <section className="About" id="about">
          <img className="aboutimg" src={AboutSushi} alt="About sushi" />

          <div className="textabout">
            <h3>About Us</h3>
            <div className="abouttextlogo">

              <h2>
                We Provide
                <br />
                Healthy Food
              </h2>
              <img className="smallaboutlogo" src={AboutSmallSushi} alt="Small sushi logo" />
            </div>
            <p className="about-p">
              Food comes to us from our relatives whether they <br />
              have wings or roots. This is how we consider<br />
              food. It also has a culture. It has a history that<br />
              passes from generation to generation.
            </p>
          </div>
        </section>

        <section className="Popular" id="popular">
          <div className="PopularMain">
          
          <div className="populartext">
            <h3>The Best Food</h3>
            <h1>Popular Dishes</h1>
          </div>

          <div className="container-card">
            <div className="card">
            <img className="popularimg" src={PopularSushi1} alt="Onrigi" />
            <h2 className="populartexth2">Onrigi</h2>
            <p className="populartextp">Japanis Dish</p>
            <h2 className="popularprice">10.99 $</h2>
          </div>

           <div className="card">
            <img className="popularimg" src={PopularSushi2} alt="Onrigi" />
            <h2 className="populartexth2">Spring Roll</h2>
            <p className="populartextp">Japanis Dish</p>
            <h2 className="popularprice">15.99 $</h2>
          </div>

            <div className="card">
            <img className="popularimg" src={PopularSushi3} alt="Onrigi" />
            <h2 className="populartexth2">Sushi Roll</h2>
            <p className="populartextp">Japanis Dish</p>
            <h2 className="popularprice">19.99 $</h2>
          </div>

          </div>
        </div>
        </section>


        <section className="Recently" id="recently">
          <div className="RecentlyMain">
            <div className="textrecently">
            <h3>Recently Added</h3>
              <h1>Sushi Samurai<br></br>
                Salmorn Cheese</h1>
                <p>Take a look at what’s new . And do not<br></br>
                   depreve yourself of a good meal, enjoy<br></br>
                    and be happy.</p>
                <button className="btnrecently">Order Now</button>
            </div>
            <img src={Recentlysalmonsushi} className="recentlyimg"></img>
          </div>
        </section>


        <section className="News">
        <div className="NewsMain">
          <img src={Newssushi} className="newssushiimg"></img>
          <div className="textnews">
            <h3>Newsletter</h3>
            <h2>Subscribe for<br></br> 
            latest update</h2>
            <form className="subscribe-form">
              <input type="emal" placeholder="Enter email"></input>
              <button className="btnnews">Subscribe</button>
            </form>
          </div>
        </div>
        </section>


        <section className="Info">
          <div className="Info-Main">
            <div className="textinfo">
              <div className="text">
                <div className="logotext">
                  <img className="infoimg" src={logo}></img>
                  <h4>Shushi</h4>
                </div>
                <p>Food for the body is not<br></br>
                  enough. There must be foos<br></br> 
                  for the soul.</p>
              </div>
              <div className="text">
                <h4>Main Menu</h4>
                <h5>About</h5>
                <h5>Menus</h5>
                <h5>Offers</h5>
                <h5>Events</h5>
              </div>
              <div className="text">
                <h4>Information</h4>
                <h5>Contact</h5>
                <h5>Orders & Returns</h5>
                <h5>Videos</h5>
                <h5>reservation</h5>
              </div>
              <div className="text">
                <h4>Address</h4>
                <h5>Greater Noida</h5>
                <h5>Sec-1,  India </h5>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="contactMain">
            <img className="imgcontact" src={conect1}></img>
            <img className="imgcontact" src={conect2}></img>
          </div>
        </section>
      </main>

      {showOrderModal && <OrderModel onClose={() => setShowOrderModal(false)} />}
    </div>
  );
}

export default App;


 