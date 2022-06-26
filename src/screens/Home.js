
import { Image, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Text from "../components/Text/Text";
import { Feather ,EvilIcons} from '@expo/vector-icons';
import { spacing } from "../theme/spacing";
import { colors } from "../theme/color";
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
  {/* Delivery title*/}
       <View>
        <Text  style={styles.deliveryText}>Food</Text>
        <Text preset="h1">Delivery</Text>
       </View>
   {/*  search section  */}
       <View style={styles.searchView}>
       <EvilIcons name="search" style={{paddingTop:6}} size={24} color="black" />       
        <TextInput
          placeholder="Search..."
          placeholderTextColor={colors.grey}
          autoCorrect={false}
          style={styles.searchInput}/>
        
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
    paddingHorizontal:spacing[5],
  },
  navbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:spacing[10]
  },
  profileImage:{
    width:40,
    height: 40,
    borderRadius:50
  },
  deliveryText:{
    marginTop:30,
    marginBottom:5,
  },
  searchView:{
    marginTop:30,
    flexDirection:'row',
  },
  searchInput:{
    marginLeft:spacing[3],
    borderBottomWidth:2,
    borderColor:colors.grey,
    width:300,
    paddingVertical:spacing[1]
   }
})


