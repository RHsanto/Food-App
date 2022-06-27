
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../components/Text/Text';
import { spacing } from "../theme/spacing";
import { AntDesign ,FontAwesome} from '@expo/vector-icons';
import { colors } from '../theme/color';
import { typography } from '../theme/typography';
export default function  Details({route,navigation}){
  // here catch item component
  const { item } = route.params;
  const {title,price,image,deliveryTime,crust,sizeName,sizeNumber} = item
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
    {/* navbar */}
        <View style={styles.navbarView}>
         <TouchableOpacity onPress={()=>{
          navigation.goBack()}}>
         <View style={styles.backBtnView}>
          <AntDesign name="left" size={10} color="black" />
          </View>
         </TouchableOpacity>
          <View style={styles.ratingIconView}>
          <FontAwesome name="star" size={12} color="white" />
          </View>
        </View>
     {/* Item Title */}
        <View style={styles.titleView}>
          <Text preset='h1'>{title}</Text>
       </View>
   {/* price view */}
      <View >
        <Text preset='h1' style={{color:colors.orange}}>${price}</Text>
      </View>
 {/*Pizza info*/}
     <View style={styles.PizzaInfoView}>
      <View style={styles.PizzaInfoList}>
      <View>
        <Text style={styles.PizzaInfoColor}>Size</Text>
        <Text preset='h3'>{sizeName} {sizeNumber}</Text>
      </View>
      <View style={styles.crustView}>
        <Text style={styles.PizzaInfoColor}>Curst</Text>
        <Text preset='h3'>{crust} </Text>
      </View>
      <View >
       <Text style={styles.PizzaInfoColor}>Delivery in</Text>
       <Text preset='h3'>{deliveryTime}</Text>
      </View>

      </View>
      <View style={styles.PizzaImageView}>
      {/* <Image source={image} /> */}
      </View>
     </View>

     </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
  flex:1,
  paddingHorizontal:spacing[5]
  },
  navbarView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:spacing[10]
  },
  backBtnView:{
    borderWidth:2,
    borderColor:colors.grey,
    padding:spacing[4],
    borderRadius:10
  },
  ratingIconView:{
    backgroundColor:colors.yellow,
    padding:spacing[4],
    borderRadius:10 
  },
  titleView:{
    marginTop:spacing[8],
    marginBottom:spacing[5],
    width:'50%'
  },
  PizzaInfoView:{
    marginTop:spacing[8],
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  PizzaInfoColor:{
    color:colors.grey,
    marginBottom:5,
    fontSize:14,
    fontFamily:'Montserrat_500Medium',
  },
  crustView:{
    paddingVertical:spacing[5]
  },
  deliveryView:{}
})