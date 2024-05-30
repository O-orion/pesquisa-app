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

export default function EditSearch() {
    const [ isVisible, setModalVisible] = useState(false)

    function openModal() {
        setModalVisible(true);
      }
    
      function closeModal() {
        setModalVisible(false);
      }

      function saveSearch(search: Search) {
        console.log(search)
      }
    return (
        <ModalComponent titulo="Editar Pesquisa" closeModal={closeModal} isVisible={isVisible} >
            <FormPesquisa saveSearch={saveSearch} closeModal={closeModal}></FormPesquisa>
        </ModalComponent>
    )
}