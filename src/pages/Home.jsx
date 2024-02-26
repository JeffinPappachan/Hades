import { Container, Flex } from "@radix-ui/themes";
import doodle from "../assests/collegestudying.png";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaHeart,
} from "react-icons/fa";
import { OpacityIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <Container size="4" width="100%">
      <Flex align="center" justify="center" direction="column" gap="4">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </Flex>
      <Flex
        style={{
          backgroundImage: `url(${doodle})`,
          backgroundSize: "cover",
          height: "50vh",
          
        }}
        direction="column"
        align="center"
        justify="center"
      >
        <h1> OUR AIM</h1>
        <p style={{ color: "white" }}>
          The aim of the website is to create an atmosohere where the learner
          can select their own syllaus based on their interset of learning
        </p>
      </Flex>
      <Flex
        className="icon-container"
        algin="center"
        justify="between"
        p="8"
        gap="5"
      >
        <div className="icon-item">
          <FaHome />
          <p>Home</p>
        </div>
        <div className="icon-item">
          <FaUser />
          <p>About</p>
        </div>
        <div className="icon-item">
          <FaEnvelope />
          <p>Contact</p>
        </div>
        <div className="icon-item">
          <FaPhone />
          <p>Phone</p>
        </div>
        <div className="icon-item">
          <FaBriefcase />
          <p>Portfolio</p>
        </div>
        <div className="icon-item">
          <FaHeart />
          <p>Favorites</p>
        </div>
      </Flex>
      <footer>
        <p>© 2021</p>
      </footer>
    </Container>
  );
};

export default Home;
