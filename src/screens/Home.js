
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/Text/Text";
import { Feather } from '@expo/vector-icons';
import { spacing } from "../theme/spacing";
const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
       <ScrollView>
       {/* navbar */}
       <View style={styles.navbar}>
        <Image style={styles.profileImage} source={require('../../assets/images/profile.jpg')} />
        <Feather name="menu" size={24} color="black" />
       </View>
       </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  navbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:spacing[5],
    marginTop:spacing[10]
  },
  profileImage:{
    width:40,
    height: 40,
    borderRadius:50
  }
})


