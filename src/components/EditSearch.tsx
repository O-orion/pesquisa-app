import { useState } from "react";
import ModalComponent from "./ModalComponent";
import FormPesquisa from "./FormPesquisa";

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
  isVisibleModal: boolean;
  selectedSearch?: Search;
  saveNewSearch: (search: Search) => void
}

export default function EditSearch({
  isVisibleModal,
  closeModal,
  selectedSearch,
  saveNewSearch
}: Props) {
  const [isVisible, setModalVisible] = useState(isVisibleModal);

  function openModal() {
    setModalVisible(true);
  }

  function closeModalEdit() {
    setModalVisible(false);
    closeModal();
  }

  function saveSearch(search: Search) {
    saveNewSearch(search)
  }

  return (
    <ModalComponent
      titulo="Editar Pesquisa"
      closeModal={closeModalEdit}
      isVisible={isVisible}
    >
      <FormPesquisa
        search={selectedSearch}
        saveSearch={saveSearch}
        closeModal={closeModalEdit}
      ></FormPesquisa>
    </ModalComponent>
  );
}
