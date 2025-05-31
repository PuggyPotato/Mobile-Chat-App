import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor : "coral"}}>
      <Tabs.Screen name="info" options={{title:"Info",tabBarIcon: ({color, focused}) =>{
        {return focused ? (<AntDesign name="user" size={24} color={color} />) 
        : (<AntDesign name="user" size={24} color="black" />)}
      }}}></Tabs.Screen>
      <Tabs.Screen name="chat" options={{title:"Chat",tabBarIcon: ({color, focused}) =>{
        {return focused ? (<FontAwesome6 name="message" size={24} color={color} />) 
        : (<
          FontAwesome6 name="message" size={24} color={color} />)}
      }}}></Tabs.Screen>
      <Tabs.Screen name="groupChat" options={{title:"Group Chat", tabBarIcon: ({color}) => (
        <AntDesign name="team" size={24} color={color} />
      )}}></Tabs.Screen>
    </Tabs>
  )
}
