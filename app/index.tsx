import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { COLORS } from "../constants/theme";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: COLORS.text }}>
        Bienvenue dans lapp
      </Text>
      <PrimaryButton
        title="Aller à la page test"
        onPress={() => router.push("/test")}
      />
    </View>
  );
}
