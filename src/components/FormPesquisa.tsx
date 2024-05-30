import {
  Box,
  Button,
  Divider,
  FormControl,
  Icon,
  Input,
  Modal,
  Radio,
  ScrollView,
  Select,
} from "native-base";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

type SearchItem = {
  id: number;
  name: string;
  age: string;
  sexo: string;
  ocupacao: string;
  vereador: string;
  voto: string;
};

type Props = {
  closeModal: () => void;
  search?: SearchItem,
  saveSearch: (search: SearchItem) => void;
};

export default function FormPesquisa({ closeModal, saveSearch, search }: Props) {
  const [sexo, setSexo] = useState("");
  const [name, setName] = useState("");
  const [age, setIdade] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [vereador, setVereador] = useState("");
  const [voto, setVoto] = useState("");
  const [countId, setCountId] = useState(0);


  useEffect(() => {
    if (search) {
        setName(search.name);
        setIdade(search.age);
        setSexo(search.sexo);
        setOcupacao(search.ocupacao);
        setVereador(search.vereador);
        setVoto(search.voto);
    }
}, [search]);

  function onChangeTextAge(value: string) {
    setIdade(value);
  }

  function onChangeTextName(value: string) {
    setName(value);
  }

  function save() {
    let search = {
      id: countId,
      name,
      age,
      sexo,
      ocupacao,
      vereador,
      voto,
    };

    setCountId(countId + 1);
    setIdade("");
    setName("");
    setSexo("");
    setOcupacao("");
    setVereador("");
    setVoto("");

    saveSearch(search);
  }

  return (
    <ScrollView flex={1}>
      <FormControl>
        <FormControl.Label>Nome</FormControl.Label>
        <Input
          value={name}
          onChangeText={onChangeTextName}
          keyboardType="ascii-capable"
          placeholder="Informe sEU NOME"
        />
      </FormControl>
      <FormControl>
        <FormControl.Label>Idade</FormControl.Label>
        <Input
          value={age}
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
            endIcon: <Icon as={FontAwesome} name="check" size="sm"></Icon>,
          }}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Select.Item label="Mulher cisgênero" value="MC"></Select.Item>
          <Select.Item label="Mulher transgênero" value="MT"></Select.Item>
          <Select.Item label="Homem cisgênero" value="HC"></Select.Item>
          <Select.Item label="Homem transgênero" value="HT"></Select.Item>
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
            endIcon: <Icon as={FontAwesome} name="check" size="sm"></Icon>,
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
        <FormControl.Label>Conhecer o Vereador Fulano</FormControl.Label>
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
        <FormControl.Label>Votaria no Vereador Fulano</FormControl.Label>
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

      <Box mt={4} display="flex" alignItems="center" justifyContent="center">
        <Divider
          my="2"
          _light={{
            bg: "gray.200",
          }}
          _dark={{
            bg: "gray.300",
          }}
        />
        <Button shadow={2} w="80%" colorScheme="success" onPressIn={save} onPress={closeModal}>
          Salvar
        </Button>
      </Box>
    </ScrollView>
  );
}
