import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor : "coral"}}>
      <Tabs.Screen name="chat" options={{title:"Chat",tabBarIcon: () =>(
        <FontAwesome6 name="message" size={24} color="black" />
      )}}></Tabs.Screen>
      <Tabs.Screen name="groupChat" options={{title:"Group Chat", tabBarIcon: () => (
        <AntDesign name="team" size={24} color="black" />
      )}}></Tabs.Screen>
    </Tabs>
  )
}
