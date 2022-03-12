import React from "react";

function Header() {
  const onclick = (e) => {
    const icon = document.getElementsByClassName("block");
    const text = document.getElementsByClassName("text");
    let n;
    n = icon.length;
    for (let i = 0; i < n; i++) {
      icon[i].classList.remove("active");
      text[i].classList.remove("active");
    }
    let x=e.target.parentElement;
    x.nextSibling.classList.add("active");
    e.target.parentElement.parentElement.parentElement.classList.add("active");
    e.preventDefault();
  };
  return (
    <>
      <div id="navbar">
        <ul id="nav">
          <li className="block active" id="home">
            <a href="#">
              <span className="icon" >
                <ion-icon name="home-outline" onClick={onclick}></ion-icon>
              </span>
              <span className="text active">Home</span>
            </a>
          </li>
          <li className="block" id="aboutus">
            <a href="#">
              <span className="icon " >
                <ion-icon name="information-circle-outline" onClick={onclick}></ion-icon>
              </span>
              <span className="text">About Us</span>
            </a>
          </li>
          <li className="block" id="contact">
            <a href="#">
              <span className="icon" >
                <ion-icon name="people-outline" onClick={onclick}></ion-icon>
              </span>
              <span className="text">Contact Us</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
      
    </>
  );
}

export default Header