import React from 'react'
import { Text, Image,View} from 'react-native'
import { styles } from "../styles/Registration";
const PostsScreen = () => {
  return (
    <View style={styles.userInfo}>
    <Image
      style={{ width: 60, height: 60 }}
      source={require("../assets/user.jpg")}
    />
    <View>
      <Text style={styles.userName}>Natali Romanova</Text>
      <Text>email@example.com</Text>
    </View>
  </View>
  )
}

export default PostsScreen