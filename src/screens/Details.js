
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import { spacing } from "../theme/spacing";
import { AntDesign ,FontAwesome} from '@expo/vector-icons';
import { colors } from '../theme/color';
export default function  Details(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbarView}>
          <View style={styles.backBtnView}>
          <AntDesign name="left" size={10} color="black" />
          </View>
          <View style={styles.ratingIconView}>
          <FontAwesome name="star" size={12} color="white" />
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
})