import * as Font from 'expo-font';
import { NotoSerif_400Regular,NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { SourceSerif4_400Regular,SourceSerif4_700Bold } from '@expo-google-fonts/source-serif-4';
import { NotoSerifDisplay_400Regular,NotoSerifDisplay_700Bold } from '@expo-google-fonts/noto-serif-display';
export default useFonts = async () =>
  await Font.loadAsync({
    'noto': NotoSerif_400Regular,
    'notodisplay':NotoSerifDisplay_400Regular,
    'sourcenoto':SourceSerif4_400Regular,
    'notobold':NotoSerif_700Bold,
    'sourcenotobold':SourceSerif4_700Bold
  });