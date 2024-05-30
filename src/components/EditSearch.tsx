import { useState } from "react";
import ModalComponent from "./ModalComponent";
import FormPesquisa from "./FormPesquisa";

interface Search {
    id: number,
    name: string,
    age: string;
    sexo: string;
    ocupacao: string;
    vereador: string;
    voto: string;
  }

  interface Props {
    closeModal: () => void,
    isVisibleModal: boolean,
    selectedSearch?: Search
  }
  

export default function EditSearch({ isVisibleModal, closeModal, selectedSearch }: Props) {
    const [ isVisible, setModalVisible] = useState(isVisibleModal)

    console.log('oiii')
    console.log(selectedSearch)
    console.log('oiii')

    function openModal() {
        setModalVisible(true);
      }
    
      function closeModalEdit() {
        setModalVisible(false);
        closeModal()
      }

      function saveSearch(search: Search) {
        console.log(search)
      }

    return (
        <ModalComponent titulo="Editar Pesquisa" closeModal={closeModalEdit} isVisible={isVisible} >
            <FormPesquisa search={selectedSearch}  saveSearch={saveSearch} closeModal={closeModalEdit}></FormPesquisa>
        </ModalComponent>
    )
}