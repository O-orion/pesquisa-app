import { View, Icon } from "native-base";
import { Fab } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Cabecalho from "../components/BoxCabecalho";
import ListSearchs from "../components/ListSearchs";
import FormPesquisa from "../components/FormPesquisa";
import ModalComponent from "../components/ModalComponent";

type SearchItem = {
  id: number;
  name: string;
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

  function saveSearch(newSearch: SearchItem) {
    setSearch((prevSearchs) => [...prevSearchs, newSearch]);
    closeModal();
  }

  return (
    <View p={4} flex={1}>
      <Cabecalho></Cabecalho>
      <ListSearchs searchs={searchs}></ListSearchs>

      <Fab
        onPress={openModal}
        mb={4}
        renderInPortal={true}
        shadow={1}
        size={"sm"}
        icon={<Icon as={FontAwesome} name="plus" size="sm"></Icon>}
      ></Fab>

      {isModalVisible && (
        <ModalComponent titulo="Pesquisa" isVisible={isModalVisible} closeModal={closeModal}>
          <FormPesquisa  saveSearch={saveSearch} closeModal={closeModal}></FormPesquisa>
        </ModalComponent>
      )}
    </View>
  );
}
