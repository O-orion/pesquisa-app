import { Image } from "react-native";

export default function Imagem() {
    const imagem = require('../assets/logo.jpg')
    return (
        <Image width={40} source={ imagem } ></Image>
    )
}
