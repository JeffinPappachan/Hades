import { Container, Flex } from "@radix-ui/themes";
import SelectComponent from "../components/select";
const option=["Malayalam","English","Mathematics","Chemistry","Computer"];

const Syllabus = () => {
  return (
    <Container size="4" width="100%">
      <Flex align="center" justify="center" direction="column" gap="4">
        <h1>Syllabus</h1>
        <SelectComponent placeholder="Select Sylabus" title="sylabus" options={option} />
      </Flex>
    </Container>
  );
};
export default Syllabus;
