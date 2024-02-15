import { Container, Flex } from "@radix-ui/themes";
import SelectComponent from "../components/select";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const option = ["Malayalam", "English", "Mathematics", "Chemistry", "Computer"];


const Syllabus = () => {
  const { profile, setProfile } = useContext(DataContext);
  return (
    <Container size="4" width="100%">
      <Flex align="center" justify="center" direction="column" gap="4">
        <h1>Syllabus</h1>
        <strong>Years-{profile.years}</strong>
        <SelectComponent
          placeholder="Select Sylabus"
          title="sylabus"
          options={option}
        />
      </Flex>
    </Container>
  );
};
export default Syllabus;
