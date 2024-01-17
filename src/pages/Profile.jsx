import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Button>
        <Link style={styles.link} to="/profile/syllabus">
          Syllabus
        </Link>
      </Button>
    </div>
  );
};
export default Profile;
const styles = {
  link: {
    color: "white",
  },
};
