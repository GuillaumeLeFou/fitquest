import { Slot, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { ActivityIndicator, View } from "react-native"
import { COLORS } from "../constants/theme"

export default function RootLayout() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === "login"

    if (!loading) {
      if (!user && !inAuthGroup) {
        router.replace("/login")
      } else if (user && inAuthGroup) {
        router.replace("/")
      }
    }
  }, [user, loading])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.background }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  return <Slot />
}
