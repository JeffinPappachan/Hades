import { Outlet, Link } from "react-router-dom";
import { Heading1 } from "../components/heading1";
import { Button, Container, Flex } from "@radix-ui/themes";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

const Layout = () => {
  const { profile, setProfile } = useContext(DataContext);
  useEffect(() => {
    if (profile.name !== "" && profile.college !== "" && profile.years !== "") {
      setShow(true);
    }
  }, [profile]);

  const [show, setShow] = useState(false);

  return (
    <Container size="4">
      <Flex mt="4" gap="2" align="start" direction="column">
        <Flex gap="5" justify="between" grow style={styles.nav}>
          <Heading1 />
          <Flex gap="5">
            <Button>
              <Link style={styles.link} to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="profile">
                Profile
              </Link>
            </Button>
            {show && (
              <Button>
                <Link style={styles.link} to="/profile/syllabus">
                  Syllabus
                </Link>
              </Button>
            )}
            <Button>
              <Link style={styles.link} to="overview">
                Overview
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="contact">
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
