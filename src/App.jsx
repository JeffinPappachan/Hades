import { Flex, Container, Heading } from '@radix-ui/themes';
import { Heading1 } from './components/heading1';

export default function App() {
  return (
    <Container>
      <Flex
        mt="7"
        direction="column"
        gap="2"
        align="start"
        justify="center"
        grow="1"
      >
        <Heading1 />
      </Flex>
    </Container>
  );
}
