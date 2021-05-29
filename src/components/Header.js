import { useColorMode } from "@chakra-ui/color-mode";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { FiSun, FiMoon } from "react-icons/fi";

export default () => {
  const { setColorMode } = useColorMode();
  return (
    <Box p={4} shadow="md">
      <Flex alignItems="center">
        <Heading>Product Page</Heading>
        <Spacer />
        <Flex>
          <HStack>
            <FiSun />
            <Switch
              onChange={(v) => {
                const { checked } = v.target;
                if (checked) {
                  setColorMode("dark");
                } else {
                  setColorMode("light");
                }
              }}
            />
            <FiMoon />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
