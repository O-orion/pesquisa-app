import {
  ScrollView,
  View,
  Icon,
  Select,
  Modal,
  FormControl,
  Input,
  Button,
  Radio,
} from "native-base";
import { Fab } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Cabecalho from "../components/BoxCabecalho";
import ListSearchs from "../components/ListSearchs";
import FormPesquisa from "../components/FormPesquisa";

type SearchItem = {
  id:number
  name: string,
  age: string;
  sexo: string;
  ocupacao: string;
  vereador: string;
  voto: string;
};

export default function Home() {

  const [searchs, setSearch] = useState<SearchItem[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function saveSearch() {
    
  }

  return (
    <View p={4} flex={1}>
      <Cabecalho></Cabecalho>
      <ListSearchs searchs={searchs} ></ListSearchs>

      <Fab
        onPress={openModal}
        mb={4}
        renderInPortal={true}
        shadow={1}
        size={"sm"}
        icon={<Icon as={FontAwesome} name="plus" size="sm"></Icon>}
      ></Fab>

      <FormPesquisa isVisible={isModalVisible}  closeModal={closeModal}></FormPesquisa>
    </View>
  );
}
