import { Container, Flex } from "@radix-ui/themes";

const Home = () => {
  return (
    <Container size="4" width="100%">
        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="4"
        >
          <h1>Home</h1>
          <p>Welcome to the home page</p>
        </Flex>
    </Container>
  );
};

export default Home;
