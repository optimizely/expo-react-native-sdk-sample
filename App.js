// @ts-check
import React from "react";
import {
  OptimizelyProvider,
  createInstance,
  createPollingProjectConfigManager,
  createBatchEventProcessor,
  useDecide,
  createLogger,
  DEBUG,
} from "@optimizely/react-sdk";
import { StyleSheet, Text, View } from "react-native";

const optimizely = createInstance({
  projectConfigManager: createPollingProjectConfigManager({
    sdkKey: process.env.EXPO_PUBLIC_OPTIMIZELY_SDK_KEY,
    autoUpdate: true,
  }),
  eventProcessor: createBatchEventProcessor({
    batchSize: 10,
    flushInterval: 1000,
  }),
  logger: createLogger({
    // logLevel: DEBUG,
    level: DEBUG
  }),
});

const Decision = () => {
  // You have to provide your flag key instead of "product_sort"
  const { decision, isLoading, error } = useDecide("product_sort");
  console.log(decision);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {String(error)}</Text>;
  }
  return (
    <Text>Decision: Flag {decision.enabled ? "Enabled" : "Disabled"}</Text>
  );
};

export default function App() {
  return (
    <OptimizelyProvider
      client={optimizely}
      user={{
        id: "user123",
      }}
    >
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
