import React from 'react';
import "./contact.scss";
import "./contact_mobile.scss";
import { useCopyToClipboard } from "./copy.ts";

const Contact = () => {

    const [value, copy] = useCopyToClipboard();

  return (
    <div id="contact" className="content_container">
      <h1 className="title">Contact</h1>

      <section className="contact_container">
        <div className="contact_item" onClick={() => copy(document.getElementById("phone").innerText)}>
          <div className="material-icons">call</div>
          <h3>Phone</h3>
          <p id="phone">0962-067202</p>
        </div>
        <div className="contact_item" onClick={() => copy(document.getElementById("mail").innerText)}>
          <div className="material-icons">mail</div>
          <h3>Mail</h3>
          <p id="mail">ty.ho1126@gmail.com</p>
        </div>
        <div className="contact_item" onClick={() => copy(document.getElementById("location").innerText)}>
          <div className="material-icons">place</div>
          <h3>Location</h3>
          <p id="location">Taichung City</p>
        </div>
      </section>
    </div>
  );
};

export { Contact };
