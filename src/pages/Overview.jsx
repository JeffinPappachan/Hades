import { Container, Flex } from "@radix-ui/themes";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Overview = () => {
  const { profile, setProfile } = useContext(DataContext);

  return (
    <Container size="4" width="100%">
      <Flex align="center" justify="center" direction="column" gap="4">
        <h1>Overview</h1>
        <p>
          {profile.name} is enrolled in {profile.college} for {profile.years}{" "}
          years.
        </p>
      </Flex>
    </Container>
  );
};
export default Overview;
