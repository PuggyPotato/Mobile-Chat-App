import { Text, View , StyleSheet } from "react-native";
import {Link} from "expo-router"

export default function Chat() {
  return (
    <View
      style={styles.view}>
      <Link href="/groupChat" style={styles.group}>Group Chat</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  view:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  group:{
        width: 100,
        height:20,
        backgroundColor:"coral", 
        borderRadius :8,
        textAlign:"center",
        alignItems:"center",
        display:"flex"}
})