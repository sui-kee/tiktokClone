import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { messageBoxStyle } from "../components/sources/inbox/messageBoxStyle";
import SuggestionProfile from "../components/sources/inbox/suggestionCard";
import { data } from "../dummyData";
import NewFollowers from "../components/sources/newFollowerScreen/newFollower";
import Suggestion from "../components/sources/inbox/suggestion";
import Activity from "../components/sources/activityScreen/activities";

export default function Activities() {
  const [viewAll, setViewAll] = useState(false);
  const handleSetViewAll = () => {
    setViewAll(!viewAll);
  };
  return (
    <ScrollView>
      <View
        style={{
          ...messageBoxStyle.messageContainer,
          height: viewAll ? "auto" : 240,
          overflow: "hidden",
        }}
      >
        {data.map((item, index) => (
          <Activity
            image={item.image}
            title="User"
            message="User like your video"
            key={index}
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onPress={handleSetViewAll}
      >
        <Text
          style={{
            fontSize: 17,
            color: "black",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          {viewAll ? "View less" : "View all"}
        </Text>
      </TouchableOpacity>
      <Suggestion />
    </ScrollView>
  );
}