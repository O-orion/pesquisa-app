import { Box, Text } from "native-base";
import { TEMAS } from "../styles/temas";


export default function Cabecalho() {
    return  (
        <Box mb={4}>
            <Text fontWeight={600} color={TEMAS.colors.gray[600]} fontSize={TEMAS.fontSizes.xl}>Pesquisa de Votos Vereado ...</Text>
            
        </Box>
    )
}
