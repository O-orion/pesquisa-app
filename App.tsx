import { NativeBaseProvider, Spinner, StatusBar, View, Image, Text } from 'native-base';
import Home from './src/screens/Home';
import { TEMAS } from './src/styles/temas';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import Menu from './src/components/Menu';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Simula um carregamento de 3 segundos (para demonstração)
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (error) {
        console.warn(error);
      } finally {
        // Indica que o aplicativo está pronto para ser exibido
        setAppIsReady(true);
        // Oculta a tela de splash
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Este código é executado quando a raiz da tela é renderizada
      // Quando o aplicativo está pronto, a tela de splash é ocultada
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Se o aplicativo não estiver pronto, exibe a tela de splash
  if (!appIsReady) {
    return (
      <NativeBaseProvider theme={TEMAS}>
        <View flex={1} justifyContent="center" alignItems="center" backgroundColor="#20ACD2">
          <Image width={200} height={200} marginBottom={20} source={require('./assets/splash.png')} />
          <Spinner color={TEMAS.colors.red[500]} />
          <Text color="white" fontSize={20}>Olá</Text>
        </View>
      </NativeBaseProvider>
    );
  }

  // Quando o aplicativo estiver pronto, exibe o conteúdo do aplicativo
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[500]} />
      <Menu></Menu>
      <Home />
    </NativeBaseProvider>
  );
}

