import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

export default ({ name, description, image, price, tags }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      shadow="sm"
      _hover={{ cursor: "pointer", shadow: "lg" }}
    >
      <Flex>
        <Image w={48} borderRadius="md" src={image} />
        <Box ml={4}>
          <Flex>
            <Heading size="md">{name}</Heading>
            <Spacer />
            <Tag right={25} position="absolute" size="lg">
              ${price}
            </Tag>
          </Flex>
          {tags.map((tag) => (
            <Tag mt={2} mr={1} size="sm">
              {tag}
            </Tag>
          ))}
          <Text mt={4}>{description}</Text>
          <Button mt={4} size="sm" colorScheme="red">
            Buy Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
