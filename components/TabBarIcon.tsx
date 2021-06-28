import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
  return <Ionicons {...props} size={30} />
}