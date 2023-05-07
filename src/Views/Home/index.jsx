import { HomepageStyled, LeftSideStyled, RightSideStyled } from "../styled";
import ProfileIcon from "../../assets/Images/Home/profile.jpg";
import GithubIcon from "../../assets/Images/Home/githubIcon.png";
import LinkedinIcon from "../../assets/Images/Home/linkedinIcon.png";
import EmailIcon from "../../assets/Images/Home/emailIcon.png";
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
            href="https://www.linkedin.com/in/chiragrathod01/"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="image" />
          </a>
          <a
            className="icon-cover"
            href="https://github.com/chirag396rathod"
            target="_blank"
          >
            <img src={GithubIcon} alt="image" />
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
          I&apos;m <span>Chirag Rathod.</span> <br /> And i&apos;m top-notch web
          and app developer proficient in React JS, React Native, and web
          design.
        </header>
        <div className="desc">
          <p>
            With my passion for web and mobile development, combined with my 1
            year of experience in the IT industry, I believe that I can make a
            valuable contribution to your team.{" "}
          </p>
          <p>
            {" "}
            During my time in the industry, I have worked on various projects,
            In addition to the React Zomato clone website, landing pages, and
            the React Native Urban management system, I have also developed a
            project management website similar to Trello. This project
            management website allows users to create boards, lists, and cards
            to manage their projects effectively. My expertise in React JS and
            React Native allowed me to develop this application with ease.{" "}
          </p>{" "}
          <p>
            {" "}
            Additionally, I have designed and developed a health-related landing
            screen and page that aimed to promote a healthy lifestyle among
            users. The landing page was optimized for conversions and included
            elements such as a signup form and a call-to-action button to
            encourage users to take action.{" "}
          </p>{" "}
          <p>
            {" "}
            As a developer, I pride myself on being proficient in creating
            high-quality code that is both scalable and maintainable. I am
            well-versed in utilizing the latest tools and technologies to
            deliver robust and feature-rich applications that meet the needs of
            my clients. Additionally, I have strong problem-solving skills and a
            keen eye for detail, which allows me to identify and resolve issues
            quickly and effectively.{" "}
          </p>{" "}
          <p>
            {" "}
            Apart from my technical skills, I am a passionate and dedicated
            individual who is committed to delivering exceptional results. I
            have excellent communication skills and work well both independently
            and as part of a team. I am always eager to learn new technologies
            and techniques and enjoy collaborating with others to find
            innovative solutions to complex problems.
          </p>{" "}
          <p>
            {" "}
            I would also like to mention that I believe I am an excellent fit
            for this project. With my extensive experience in React JS and React
            Native, as well as my passion for web and mobile development, I am
            confident that I can contribute to the success of your project. My
            track record of delivering high-quality applications on time and
            within budget demonstrates my ability to handle complex development
            projects effectively.{" "}
          </p>{" "}
          <p>
            {" "}
            Furthermore, my proficiency in both design and development makes me
            a versatile candidate who can contribute to every stage of the
            project. Whether it is creating wireframes, developing prototypes,
            or writing code, I am comfortable and capable of delivering
            top-quality results.{" "}
          </p>{" "}
          <p>
            {" "}
            Overall, I am confident that my skills, experience, and passion make
            me a perfect fit for your project. I am eager to discuss the
            opportunity further and demonstrate my abilities. Thank you for your
            intrust.
          </p>
        </div>
      </RightSideStyled>
    </HomepageStyled>
  );
};

export default Home;
