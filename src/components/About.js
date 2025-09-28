import React, { useState } from "react";
import '../about.css';

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  // });
let mystyle ={
  color: props.mode==='dark'?'white':'black',
  backgroundColor : props.mode==='dark'?'rgb(36 74 104)':'white'
}


  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Developer</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <div className="developer">
                <img src="/developerpic.jpg"></img>
                <h3>RAJ KUMAR GORAIN</h3>
                <h4>B.E. in CSE from U.I.T,B.U.</h4>
                <p>Hi there,I am Raj Kumar Gorain from Purulia,West Bengal.I am
                  currently in 3<sup>rd</sup> year.I hope you like my site and
                   make the most use of it.<br/>For more details and support, contact me<br/>
                   <b>Email</b> :- 46rajkumar94@gmail.com
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Functionalities</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p>You can perform lots of activities and transform your text into many ways.<br/>
              You can convert your text to:
              <ul>
                <li>Uppercase</li>
                <li>Lowercase</li>
                <li>Copy</li>
                <li>Remove extra spaces</li>
              </ul>
              If you want any other functionality to be added, please feel free to contact me.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Creation</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p>
                The site is made using <u>React</u>. It is deployed using <u>Github Pages</u>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
