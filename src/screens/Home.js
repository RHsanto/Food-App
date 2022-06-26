
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Text from "../components/Text/Text";
import { Feather ,EvilIcons} from '@expo/vector-icons';
import { spacing } from "../theme/spacing";
import { colors } from "../theme/color";
import { Categories_Data } from "../data/categories.data";
const Home = () => {
  const renderCategoriesItem =({item})=>{
    return(
      <View
        style={[styles.categoryItem,
          {
            backgroundColor: item.selected ? colors.yellow : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },]}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text preset="h4" style={styles.categoryTitle}>{item.title}</Text>
        <View 
         style={[styles.categorySelector,
          {
            backgroundColor: item.selected ? colors.white : colors.pink,
          },
        ]}>
        <Feather name="chevron-right" size={12} style={styles.categoryIcon}  
         color={item.selected ? colors.black : colors.white} />
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
         <View style={styles.categoriesView}>
          <FlatList 
           data={Categories_Data}
           renderItem={renderCategoriesItem}
           keyExtractor={(item)=>item.id}
           horizontal={true}
          />
        </View>
      </View>
{/* Popular section*/}
     <View style={styles.popularView}>
      <Text preset="h3">Popular</Text>
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
    paddingBottom:20,
    marginLeft:-20
   },
   categoryItem:{
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
   },
   categoryImage:{
    width: 60,
    height: 60,
    marginTop: 25,
    marginHorizontal: 20,
   },
   categoryTitle:{
    textAlign: 'center',
    marginTop: 10,
   },
   categorySelector:{
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
   },
   categoryIcon:{
    alignSelf: 'center',
   }
})


