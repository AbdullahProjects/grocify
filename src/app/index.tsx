import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-400 text-2xl pb-6">Splash Screen</Text>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
