import "./about.scss";
import hands from "../../assets/hands.jpg";
import TeamData from "../../Data/TeamData";
import AppStat from "../../Data/AppStat";
import OurValues from "../../Components/ourvalues/OurValues";
import interview from "../../assets/interview.png";
import Job from "../../Components/jobcontainer/Job";
import Button from '../../UI/Button'

const About = () => {
  return (
    <section>
      <header>
        <p className="about">About us</p>
        <h1>About Soberpal</h1>
        <p className="about__soberpal">
          Everything you need to go through the journey of reducing your alcohol
          intake. We’ve done the heavy lifting
          <br />
          so you don’t have to - the perfect starting point.
        </p>
        <p className="learn__more">Learn more about the team behind soberpal</p>
      </header>
      <section className="stats">
        <img src={hands} alt="hands" className="hands" />
        <div className="stats__content">
          <p>We’ve helped a couple of people reduce their inatke of alcohol</p>
          <h3>
            We’re only just getting <br />
            started on our journey
          </h3>
          {/* Stats data */}
          <div className="stats__data-container">
            {AppStat.map((stat) => (
              <div className="stats__data" key={stat.id}>
                <p className="count">{stat.count}</p>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="team">
        <h3>Meet our team</h3>
        <p>
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture <br />
          that empowers you to do you best work.
        </p>
        <div className="team__members">
          {/* Team Data */}
          {TeamData.map((data) => (
            <div className="member" key={data.id}>
              <img className="avatar" src={data.avatar} alt={data.name} />
              <p className="name">{data.name}</p>
              <p className="designation">{data.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ourvalues section */}
      <section>
        <OurValues />
      </section>

      {/* open postions section */}
      <section className="position">
        <p>Open positions</p>
        <h4>We’re looking for talented people</h4>
        <p className="position__text">
          We’re a 100% remote team spread all across the world. Join us!
        </p>
        <div className="interview">
          <img src={interview} alt="Interview" />
        </div>
      </section>

       {/* job container section */}
       <section>
          <Job />
        </section>

      <div className="download" >
          <div>
            <h6>Download the Soberpal app</h6>
            <p>Join over 200+ people already growing with Soberpal.</p>
          </div>
          <Button text='Download App' />
        </div>
    </section>
  );
};

export default About;
