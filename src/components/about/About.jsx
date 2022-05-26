import "./about.css";
import me from "./my.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">-- For me here is nothing greater than Shri. Krishna's Bhakti.</p>
        <p className="a-desc">-- My behaviour like a mirror its depend on you.</p>
        <p className="a-desc">
        -- Chasing my dreams to get my dream girl.
        </p>
        <p className="a-desc">-- Curiousity increases my talent.</p>
       
  
        <h1 className="a-title">Experienced</h1>
      
      
              <p className="a-desc">
              -- Campus Ambassador by Verzo Plateform.
        </p>
        <p className="a-desc">-- Wealth Management Analyist in Wise Finserv.</p>
        <p className="a-desc"> -- Career guider in "Desh ke Mentor" program organised by Delhi C.M.</p>
        <p className="a-desc">-- Frontend Developer in Preneurship.</p>
        <h1 className="a-title1">Referred by: <br/>Mr. Sagnik Bose <br/>CEO & Founder  of Preneurship</h1>
        <p className="a-desc">His exposure in this area is very good.During his job,he easily handled major responsibilties and<br/> we found him to be hardworking and very productive to us. We found him to be self-started who <br/>is motivated,duly bound and a hghly committed team player with strong analytical knowledge.</p>
     
      </div>
    </div>
  );
};

export default About;
