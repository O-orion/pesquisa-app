import { Box, HStack, Text } from "native-base";
import { TEMAS } from "../styles/temas";

export default function Menu() {
  return (
    <Box h={50} shadow={9}  bg={TEMAS.colors.blue[500]}>
      <HStack  h="100%" space={4} justifyContent="center"  alignItems="center">
        <Text color={TEMAS.colors.white}>Item 1</Text>
        <Text color={TEMAS.colors.white}>Item 2</Text>
        <Text color={TEMAS.colors.white}>Item 3</Text>
      </HStack>
    </Box>
  );
}
