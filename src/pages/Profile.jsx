import { Button, Container, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    
        <h1>Profile</h1>
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
