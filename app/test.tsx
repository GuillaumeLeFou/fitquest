import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../constants/theme";

export default function PageTest() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, color: COLORS.text }}>Ceci est une page test</Text>
      <Button title="Retour à l'accueil" onPress={() => router.back()} />
    </View>
  );
}