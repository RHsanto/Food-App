
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Text from "../components/Text/Text";
import { Feather ,EvilIcons} from '@expo/vector-icons';
import { spacing } from "../theme/spacing";
import { colors } from "../theme/color";
import { Categories_Data } from "../data/categories.data";
const Home = () => {
  const renderCategoriesItem =({item})=>{
    return(
      <View style={styles.categoryItem}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <View style={styles.categorySelector}>
        <Feather name="chevron-right" size={8} style={styles.categoryIcon} />
        </View>
      </View>
    )
  }
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
  {/* Categories section*/}
      <View >
       <Text preset="h3">Categories</Text>
       <FlatList 
        data={Categories_Data}
        renderItem={renderCategoriesItem}
        keyExtractor={(item)=>item.id}
        horizontal={true}
        style={styles.categoriesView}
       />
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
    marginVertical:30,
    flexDirection:'row',
  },
  searchInput:{
    marginLeft:spacing[3],
    borderBottomWidth:2,
    borderColor:colors.grey,
    width:300,
    paddingVertical:spacing[1]
   },
   categoriesView:{
    paddingTop:15,
    paddingBottom:20
   },
   categoryItem:{
    backgroundColor:colors.yellow
   }
})


