import { Button, Container, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const Profile = () => {
  const { profile, setProfile } = useContext(DataContext);
  console.log(profile);
  return (
    <Container size="4" width="100%">
      <Flex align="center" justify="center" direction="column" gap="4">
        <h1>Profile</h1>
        <form>
          <input
            required
            type="text"
            placeholder="Name"
            onChange={(event) =>
              setProfile({ ...profile, name: event.target.value })
            }
          />
          <input
            required
            type="text"
            placeholder="College Enrolled"
            onChange={(event) =>
              setProfile({ ...profile, college: event.target.value })
            }
          />
          <input
            required
            type="number"
            placeholder="Years"
            onChange={(event) =>
              setProfile({ ...profile, years: event.target.value })
            }
          />
        </form>

        <h1></h1>
        <Button>
          <Link style={styles.link} to="/profile/syllabus">
            Syllabus
          </Link>
        </Button>
      </Flex>
    </Container>
  );
};
export default Profile;
const styles = {
  link: {
    color: "white",
  },
};
