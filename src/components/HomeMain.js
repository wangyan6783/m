import React, {Fragment} from 'react';
import arrowButton from '../images/arrow-button.png';

const HomeMain = () => {
  return (
    <div className="homemain">
      <h1>Get a website in 15 minutes<span> or less</span></h1>
      <form>
        <input type="text" className="search-input" placeholder="Write your domain name here.." />
        <input type="submit" className="search-btn" value="Search"/>
      </form>
      <p className="action-text">Learn How We Can Enhance Your Business</p>
      <img src={arrowButton} />
      <p className="main-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo</p>
      <button className="account-btn">Create Your Account</button>
    </div>
  )

}

export default HomeMain;
