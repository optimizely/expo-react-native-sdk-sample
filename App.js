// @ts-check
import React from 'react'
import { OptimizelyProvider, createInstance, useDecision } from "@optimizely/react-sdk";
import { StyleSheet, Text, View } from "react-native";

const optimizely = createInstance({
  sdkKey: process.env.EXPO_PUBLIC_OPTIMIZELY_SDK_KEY,
  eventBatchSize: 10,
  eventFlushInterval: 1000,
});

const Decision = () => {
  // You have to provide your flag key instead of "product_sort"
  const [decision, isClientReady, isTimeout] = useDecision("product_sort");
  console.log(decision)
  if (!isClientReady) {
    return <Text>Loading...</Text>;
  }
  if (isTimeout) {
    return <Text>Timeout...</Text>;
  }
  return (
    <Text>
      Decision: Flag {decision.enabled ? "Enabled" : "Disabled"}
    </Text>
  );
};

export default function App() {
  return (
    <OptimizelyProvider optimizely={optimizely} user={{
      id: "user123",
    }}>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Decision />
      </View>
    </OptimizelyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
