import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { COLORS } from "../constants/theme";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        console.log("Données utilisateur :", docSnapshot.data());
      } else {
        console.log("Aucune donnée trouvée pour cet utilisateur.");
      }
    });

    return () => unsubscribe();
  }, [user]);

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
