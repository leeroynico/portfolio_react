import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_yiS7hGl9OqRBKzBjAN8MQ");

export function SendMail(prenom, nom, contact, messageWrite, messageOptions) {
  const serviceID = "service_mw1fy0p";
  const templateID = "template_axlv97h";
  const templateParams = {
    prenom: prenom,
    nom: nom,
    contact: contact,
    messageWrite: messageWrite,
    messageOptions: messageOptions,
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
