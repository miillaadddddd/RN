import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/* HeaderButton */}

      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPress={() => {}}
      />
      {/* HeaderButton */}
      <HeaderButton
        title="Pickup"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPress={() => {}}
      />
    </View>
  );
}

const HeaderButton = (propes) => (
  <TouchableOpacity
    style={{
      backgroundColor: propes.activeTab == propes.title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => propes.setActiveTab(propes.title)}
  >
    <Text
      style={{
        color: propes.activeTab == propes.title ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {propes.title}
    </Text>
  </TouchableOpacity>
);
