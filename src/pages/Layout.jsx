import { Outlet, Link } from "react-router-dom";
import { Heading1 } from "../components/heading1";
import { Button, Container, Flex } from "@radix-ui/themes";

const Layout = () => {
  return (
    <Container size="4">
      <Flex mt="4" gap="2" align="start" direction="column">
        <Flex
          gap="5"
          justify="between"
          grow
          style={styles.nav}
        >
          <Heading1 />
          <Flex gap="5">
            <Button>
              <Link style={styles.link} to="/Hades">
                Home
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="/Hades/profile">
                Profile
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="/Hades/overview">
                Overview
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="/Hades/contact">
                Contact
              </Link>
            </Button>
          </Flex>
        </Flex>
        <Outlet />
      </Flex>
    </Container>
  );
};

export default Layout;
const styles = {
  link: {
    color: "white",
    },
    nav: {
        position: "sticky",
        top: "0",
        backgroundColor: "darkslategray",
        zIndex: "100",
        borderBottom: "1px solid #eaeaea",
        padding: "1rem",
        width: "100%",
        borderRadius: "0.5rem",
        },
};
