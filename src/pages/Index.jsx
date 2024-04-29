// Particles - A marketplace for software talent specialized in web technologies
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Tag, Text, VStack, Image } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  {
    name: "John Doe",
    location: "San Francisco, CA",
    technologies: ["React", "Node.js", ".NET"],
    id: 1,
  },
  {
    name: "Jane Smith",
    location: "New York, NY",
    technologies: ["Go", "JavaScript"],
    id: 2,
  },
  {
    name: "Alice Johnson",
    location: "Austin, TX",
    technologies: ["React", "Node.js"],
    id: 3,
  },
  {
    name: "Bob Brown",
    location: "Seattle, WA",
    technologies: [".NET", "JavaScript"],
    id: 4,
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Box textAlign="center">
          <Heading as="h1" size="xl">
            Welcome to Particles
          </Heading>
          <Text mt={4} fontSize="lg">
            Find and connect with top software talent specialized in web technologies.
          </Text>
        </Box>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search developers by name, technology..." />
        </InputGroup>

        <Flex wrap="wrap" justifyContent="space-between">
          {developers.map((dev) => (
            <Box p={5} shadow="md" borderWidth="1px" flex="1 1 45%" m={2} borderRadius="md">
              <Flex alignItems="center">
                <Image borderRadius="full" boxSize="50px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0MDUzMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={`${dev.name} portrait`} mr={4} />
                <VStack align="stretch">
                  <Text fontWeight="bold">{dev.name}</Text>
                  <Text fontSize="sm">{dev.location}</Text>
                </VStack>
              </Flex>
              <Stack direction="row" mt={2}>
                {dev.technologies.map((tech) => (
                  <Tag size="sm" key={`${dev.id}-${tech}`}>
                    {tech}
                  </Tag>
                ))}
              </Stack>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" mt={4} size="sm">
                Send Message
              </Button>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
