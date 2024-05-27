import {
  ScrollView,
  Text,
  View,
  Box,
  Icon,
  Select,
  Modal,
  FormControl,
  Input,
  Button,
  Radio,
} from "native-base";
import { Fab } from "native-base";
import { TEMAS } from "../styles/temas";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Cabecalho from "../components/BoxCabecalho";
import ListSearchs from "../components/ListSearchs";

type SearchItem = {
  idade: string;
  sexo: string;
  ocupacao: string;
  vereador: string;
  voto: string;
};

export default function Home() {
  const [searchs, setSearch] = useState<SearchItem[]>([]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [vereador, setVereador] = useState("");
  const [voto, setVoto] = useState("");

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function onChangeTextAge(value: string) {
    setIdade(value);
  }

  function saveSearch() {
    let search = {
      idade,
      sexo,
      ocupacao,
      vereador,
      voto,
    };

    setSearch([...searchs, search]);

    console.log(searchs);
  }

  return (
    <View p={4} flex={1}>
      <Cabecalho></Cabecalho>

      <ListSearchs></ListSearchs>
      <Fab
        onPress={openModal}
        mb={4}
        renderInPortal={true}
        shadow={1}
        size={"sm"}
        icon={<Icon as={FontAwesome} name="plus" size="sm"></Icon>}
      ></Fab>

      <Modal isOpen={isModalVisible} onClose={closeModal}>
        <Modal.Content maxHeight="90%" maxWidth="90%">
          <Modal.CloseButton />
          <Modal.Header>Pesquisa</Modal.Header>
          <Modal.Body>
            <ScrollView flex={1}>
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
    </View>
  );
}
