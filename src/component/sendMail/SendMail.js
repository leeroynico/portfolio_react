import React from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_yiS7hGl9OqRBKzBjAN8MQ");

function SendMail() {
  const serviceID = "service_mw1fy0p";
  const templateID = "template_axlv97h";
  const templateParams = {};

  return (
    <>
      <div
        style={{ background: "green", color: "red", marginLeft: 30 }}
        onClick={() => {
          emailjs.send(serviceID, templateID, templateParams).then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        }}
      >
        Send mail
      </div>
    </>
  );
}

export default SendMail;
