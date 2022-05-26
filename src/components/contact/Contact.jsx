import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import insta from "../../img/insta.webp";
import emailjs from "emailjs-com"
import tele from "../../img/tt.png";
import link from "../../img/linkedin.png";
import github from "../../img/github.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Result=()=>{
return(
  <p>Your Message has been successfully sent.I will contact you soon</p>
);
};
const Contact = () => {
  const form = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
const[result,showResult]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_629ogyq',
      'template_eo8afy6',
        e.target,
        'bVcost1zdWtqQmpiu'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true);
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">You also contact with me.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a rel="noreferrer" href="tel: 9650513361" target="_blank"> +91-9650513361</a>
            </div>
            <div className="c-info-item">
         
              <img className="c-icon" src={Email} alt="" />
              <a rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGJLZPFLrWZNwBzWqvmTsgmZxDrLfzHSVVlQhSvCZkTxsGQkKPkHtXqkGTfPbjgQNnjB" target="_blank">nipun.bt19@nsut.ac.in</a>
            </div>
            <div className="c-info-item">
              <img src={link} alt="" className="c-icon" />
              <a rel="noreferrer" href="https://www.linkedin.com/in/nipun-yadav-5bb736178/" target="_blank">Nipun Yadav</a>
            </div>
            <div className="c-info-item">
              <img src={github} alt="" className="c-icon" style={{backgroundColor:"white" ,borderRadius:20}}/>
              <a rel="noreferrer" href="https://github.com/Nyadav123" target="_blank">Nyadav123</a>
            </div>
            <div className="c-info-item">
              <img src={tele} alt="" className="c-icon" />
              <a  rel="noreferrer"href="https://mobile.twitter.com/NipunYadav123" target="_blank">Nipunyadav123</a>
            </div>
            <div className="c-info-item">
              <img src={insta} alt="" className="c-icon" />
              <a rel="noreferrer" href="https://www.instagram.com/nipun___yadav/" target="_blank">nipun___yadav</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" /><a rel="noreferrer" target="_blank" href="https://www.google.co.in/maps/place/Metro+Station+Samaypur+Badli,+Bawana+Rd,+Suraj+Park,+Badli,+Rohini,+New+Delhi,+Delhi+110042/@28.7447563,77.133936,16.28z/data=!4m5!3m4!1s0x390d0104d97c6181:0x43018bd8edd2fa8e!8m2!3d28.7462907!4d77.1375512" >Samaypur,Badli,Delhi-110042</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className="c-title1">  <b>What’s your story?</b> Get in touch. Always available for
            advicing a best career path.</h1>
          
          <form ref={form} onSubmit={sendEmail}>
            <input  type="text" placeholder="Name" name="name" />
           &nbsp; <input  type="text" placeholder="Subject" name="subject" />
           <input  type="text" placeholder="Email" name="email" />
            &nbsp;  <input  type="text" placeholder="Phone No." name="phone" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <textarea  rows="5" placeholder="Any Feedback leave here &nbsp;!" name="rating" className="feedback" />
            {/* <ReactStars
            style={{marginTop:10}}
            name="rating"
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
  /> */}
            <button   style={{marginTop:10}} type="submit" value="Send">Submit</button>
            <div  style={{marginTop:10}} className="row">{
              result ? <Result/>:null
            }
            {/* style={{backgroundColor: darkMode && "#333"}}
            if ypu want to add background on darkmode */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
