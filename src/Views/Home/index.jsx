import { HomepageStyled, LeftSideStyled, RightSideStyled } from "../styled";
import ProfileIcon from "../../assets/Images/Home/profile.jpg";
import GithubIcon from "../../assets/Images/github-svg-icon.svg";
import LinkedinIcon from "../../assets/Images/linkedin-svg-icon.svg";
import EmailIcon from "../../assets/Images/email-svg-icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  return (
    <HomepageStyled>
      <LeftSideStyled>
        <div className="image-bg">
          <LazyLoadImage src={ProfileIcon} effect="blur" />
        </div>
        <div className="links">
          <a
            className="icon-cover"
            href="https://github.com/chirag396rathod"
            target="_blank"
          >
            <img src={GithubIcon} alt="image" />
          </a>
          <a
            className="icon-cover"
            href="https://www.linkedin.com/in/chiragrathod01/"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="image" />
          </a>
          <a
            className="icon-cover"
            href="mailto:ahirchirag396@gmail.com"
            target="_blank"
          >
            <img src={EmailIcon} alt="image" />
          </a>
        </div>
      </LeftSideStyled>
      <RightSideStyled>
        <header>
          Hi there, I&apos;m <span>Chirag Rathod.</span> <br /> And i&apos;m
          Architecting Excellence with MERN: Unleashing Innovative Web and
          Mobile Experiences
        </header>
        <div className="desc">
          <p>
            I am a web designer and developer with over 1.7 years of experience,
            specializing in React JS development. I am dedicated to enhancing
            design usability and finding solutions to various challenges. In my
            current role, I work on product development and Single Sign-On (SSO)
            login functionality.
          </p>
          <p>
            My portfolio includes projects such as a React Zomato clone website,
            React Native urban management system, and a project management
            website inspired by Trello. The project management site allows users
            to create boards, lists, and cards for efficient project management.
            My expertise in React JS and React Native has made these projects a
            breeze.
          </p>
          <p>
            I've also created a health-related landing page optimized for user
            conversions. It features a signup form and a compelling
            call-to-action button to promote a healthy lifestyle.
          </p>
          <p>
            I take pride in writing high-quality, scalable, and maintainable
            code. I stay up-to-date with the latest tools and technologies to
            deliver robust applications that meet client needs. My strong
            problem-solving skills and attention to detail help me quickly
            identify and resolve issues.
          </p>
          <p>
            Beyond my technical skills, I'm a passionate and dedicated
            professional who excels in communication and teamwork. I'm eager to
            learn new technologies and enjoy collaborating to find innovative
            solutions.
          </p>
          <p>
            I believe I'm a perfect fit for your project. With my extensive
            experience in React JS and React Native, I can contribute to your
            project's success. I have a track record of delivering high-quality
            applications on time and within budget. My proficiency in both
            design and development makes me a versatile candidate who can
            contribute at every project stage.
          </p>
          <p>
            In summary, my skills, experience, and passion make me a strong
            candidate for your project. I'm eager to discuss the opportunity
            further and showcase my abilities. Thank you for your interest.
          </p>
        </div>
      </RightSideStyled>
    </HomepageStyled>
  );
};

export default Home;
