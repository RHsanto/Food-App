
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import { spacing } from "../theme/spacing";
export default function  Details(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Text>Hello Details</Text>
     </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
  flex:1,
  paddingHorizontal:spacing[5]
  }
})