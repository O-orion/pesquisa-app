import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { Box, Button, VStack } from "native-base";
import { Text } from "react-native";

interface Search {
  id: number;
  name: string;
  age: string;
  sexo: string;
  ocupacao: string;
  vereador: string;
  voto: string;
}

interface Props {
  closeModal: () => void;
  isVisbility: boolean;
  selectedSearch?: Search;
  deletSearch: (id?:number) => void;
}

export default function DeleteSearch({
  closeModal,
  isVisbility,
  deletSearch,
}: Props) {
  const [isVisibleModal, setModalVisible] = useState(isVisbility);

  function closeModalDelet() {
    setModalVisible(false);
    closeModal();
  }

  return (
    <ModalComponent
      isVisible={isVisibleModal}
      titulo="Remover Pesquisa"
      closeModal={closeModalDelet}
    >
      <Box>
        <VStack>
            <Text>Deseja excluir está pesquisa ?</Text>
            <Button>Sim</Button>
            <Button>Não</Button>
        </VStack>
      </Box>
    </ModalComponent>
  );
}
