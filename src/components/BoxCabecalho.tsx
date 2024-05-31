import { Box, Text } from "native-base";
import { TEMAS } from "../styles/temas";

export default function Cabecalho() {
  return (
    <Box mb={7}>
      <Text
        fontWeight={600}
        textAlign="center"
        color={TEMAS.colors.gray[600]}
        fontSize={TEMAS.fontSizes.xl}
      >
        Pesquisa de Votos Vereado
      </Text>
      <Text
        fontWeight={600}
        textAlign="center"
        color={TEMAS.colors.gray[500]}
        fontSize={TEMAS.fontSizes.md}
      >
        Vereador...
      </Text>
    </Box>
  );
}
