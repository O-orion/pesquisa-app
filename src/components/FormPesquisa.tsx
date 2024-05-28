import { Button, FormControl, Icon, Input, Modal, Radio, ScrollView, Select, View } from "native-base";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    isVisible: boolean;
    closeModal: () => void;
  }
export default function FormPesquisa( {isVisible, closeModal}:Props) {

    const [modalVisible, setModalVisible] = useState(isVisible);

    const [sexo, setSexo] = useState("");
    const [name, setName] = useState("");
    const [age, setIdade] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [vereador, setVereador] = useState("");
    const [voto, setVoto] = useState("");
    const [countId, setCountId] = useState(0);
    
    function onChangeTextAge(value: string) {
        setIdade(value);
    }
    
      function onChangeTextName(value: string) {
        setName(value);
      }
    
    
      function saveSearch() {
        
        let search = {
          id: countId,
          name,
          age,
          sexo,
          ocupacao,
          vereador,
          voto,
        };
    
        setCountId(countId + 1)
        setIdade('')
        setName('')
        setSexo('')
        setOcupacao('')
        setVereador('')
        setVoto('')
        
      }

    return (
        <Modal isOpen={modalVisible} onClose={closeModal}>
        <Modal.Content maxHeight="90%" maxWidth="90%">
          <Modal.CloseButton />
          <Modal.Header>Pesquisa</Modal.Header>
          <Modal.Body>
            <ScrollView flex={1}>
            <FormControl>
                <FormControl.Label>Nome</FormControl.Label>
                <Input
                  onChangeText={onChangeTextName}
                  keyboardType="ascii-capable"
                  placeholder="Informe sEU NOME"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Idade</FormControl.Label>
                <Input
                  onChangeText={onChangeTextAge}
                  keyboardType="numeric"
                  placeholder="Informe sua idade"
                />
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>Selecionar Gênero Sexual</FormControl.Label>
                <Select
                  selectedValue={sexo}
                  placeholder="Selecione sua opção sexual"
                  _selectedItem={{
                    bg: "teal.400",
                    endIcon: (
                      <Icon as={FontAwesome} name="check" size="sm"></Icon>
                    ),
                  }}
                  onValueChange={(itemValue) => setSexo(itemValue)}
                >
                  <Select.Item
                    label="Mulher cisgênero"
                    value="MC"
                  ></Select.Item>
                  <Select.Item
                    label="Mulher transgênero"
                    value="MT"
                  ></Select.Item>
                  <Select.Item label="Homem cisgênero" value="HC"></Select.Item>
                  <Select.Item
                    label="Homem transgênero"
                    value="HT"
                  ></Select.Item>
                  <Select.Item label="Gênero-fluido" value="GF"></Select.Item>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>Zona Residente</FormControl.Label>
                <Select
                  selectedValue={ocupacao}
                  placeholder="Selecionar Zona"
                  _selectedItem={{
                    bg: "teal.400",
                    endIcon: (
                      <Icon as={FontAwesome} name="check" size="sm"></Icon>
                    ),
                  }}
                  onValueChange={(itemValue) => setOcupacao(itemValue)}
                >
                  <Select.Item label="Norte" value="Norte" />
                  <Select.Item label="Sul" value="Sul" />
                  <Select.Item label="Oeste" value="Oeste" />
                  <Select.Item label="Leste" value="Lest" />
                  <Select.Item label="Rural" value="Rural" />
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>
                  Conhecer o Vereador Fulano
                </FormControl.Label>
                <Radio.Group
                  name="myRadioGroup"
                  value={vereador}
                  onChange={(nextValue) => setVereador(nextValue)}
                >
                  <Radio value="true" my={1}>
                    Sim
                  </Radio>
                  <Radio value="false" my={1}>
                    Não
                  </Radio>
                </Radio.Group>
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>
                  Votaria no Vereador Fulano
                </FormControl.Label>
                <Radio.Group
                  name="myRadioGroup"
                  value={voto}
                  onChange={(nextValue) => setVoto(nextValue)}
                >
                  <Radio value="true" my={1}>
                    Sim
                  </Radio>
                  <Radio value="false" my={1}>
                    Não
                  </Radio>
                </Radio.Group>
              </FormControl>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPressIn={saveSearch}
              colorScheme="success"
              onPress={closeModal}
            >
              Salvar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
}