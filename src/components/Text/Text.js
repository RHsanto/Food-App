import { StyleSheet, Text as RNtext} from "react-native";
import { presets } from "./text.preset";



export default function Text({children, preset="default",style}){
  const textStyle = StyleSheet.compose(presets[preset],style)
  return (
    <RNtext style={textStyle}>{children}</RNtext>
  )
}