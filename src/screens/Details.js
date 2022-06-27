
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../components/Text/Text';
import { spacing } from "../theme/spacing";
import { AntDesign ,FontAwesome} from '@expo/vector-icons';
import { colors } from '../theme/color';
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
      <View style={styles.sizeView}>
        <Text preset='h4'>Size</Text>
        <Text preset='h3'>{sizeName} {sizeNumber}</Text>
      </View>
      <View style={styles.crustView}>
      <Text preset='h4'>Curst</Text>
      <Text preset='h3'>{crust} </Text>
      </View>
      <View style={styles.deliveryView}>
       <Text preset='h4'>Delivery in</Text>
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
  },
  PizzaInfoList:{},
  sizeView:{},
  crustView:{},
  deliveryView:{}
})