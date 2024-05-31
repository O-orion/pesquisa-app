import {
  Box,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { TEMAS } from "../styles/temas";
import { useState } from "react";
import EditSearch from "./EditSearch";
import DeleteSearch from "./DeleteSearch";

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
  searchs: Search[]; // Supondo que SearchItem seja o tipo dos itens na lista
  editSearchInList: (search: Search) => void;
}

export default function ListSearchs({ searchs, editSearchInList }: Props) {
  const [editSearch, setEditSearch] = useState<boolean>(false);
  const [deletSearch, setDeletSearch] = useState<boolean>(false);
  const [selectedSearch, setSelectedSearch] = useState<Search>();

  const data = searchs;

  function exibirSearch(search: Search) {
    setSelectedSearch(search);
    setEditSearch(true);
  }

  function openModalDelete(search: Search) {
    setDeletSearch(true)
    setSelectedSearch(search)
  }

  function closeModalEdit() {
    setEditSearch(false);
  }

  function closeModalDelet() {
    setDeletSearch(false)
  }

  function saveSearchEdit(search: Search) {
    editSearchInList(search)
  }

  function deleteSearch(id?: number) {

  }

  return (
    <Box>
      <Heading color={TEMAS.colors.gray[500]} fontSize="sm" pb="1">
        Pesquisas Realizadas
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              {
                <Icon
                  alignSelf="center"
                  as={FontAwesome}
                  name="user"
                  color={TEMAS.colors.blue[500]}
                  size="sm"
                ></Icon>
              }
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {`Nome: ${item.name}`}
                </Text>

                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {`Idade: ${item.age}`}
                </Text>
              </VStack>
              <Spacer />
              <Box>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {"11:00 PM"}
                </Text>
                <Box display="flex" flexDir="row">
                  <IconButton
                    icon={<Icon as={FontAwesome} name="pencil" />}
                    borderRadius="full"
                    _icon={{
                      color: "blue.500",
                      size: "md",
                    }}
                    _hover={{
                      bg: "blue.600:alpha.20",
                    }}
                    _ios={{
                      _icon: {
                        size: "2xl",
                      },
                    }}
                    onPress={() => exibirSearch(item)}
                  />
                  <IconButton
                  onPress={ () => openModalDelete(item) }
                    icon={<Icon as={FontAwesome} name="trash" />}
                    borderRadius="full"
                    _icon={{
                      color: "red.600",
                      size: "md",
                    }}
                    _hover={{
                      bg: "red.600:alpha.20",
                    }}
                    _ios={{
                      _icon: {
                        size: "2xl",
                      },
                    }}
                  />
                </Box>
              </Box>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {editSearch && (
        <EditSearch
          saveNewSearch={saveSearchEdit}
          selectedSearch={selectedSearch}
          closeModal={closeModalEdit}
          isVisibleModal={editSearch}
        ></EditSearch>
      )}

      {
        deletSearch && (
          <DeleteSearch deletSearch={deleteSearch} closeModal={closeModalDelet} isVisbility={deletSearch} ></DeleteSearch>
        )
      }

    </Box>
  );
}
