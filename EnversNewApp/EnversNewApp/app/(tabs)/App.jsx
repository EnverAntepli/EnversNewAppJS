import { FlatList, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
 
 
const DATA=[
{id:"1",title:"List1"},
{id:"2",title:"List2"},
{id:"3",title:"List3"},
{id:"4",title:"List4"},
{id:"5",title:"List5"},
{id:"6",title:"List6"},
{id:"7",title:"List7"},
{id:"8",title:"List8"},
{id:"9",title:"List9"},
{id:"10",title:"List10"},
{id:"11",title:"List11"},
 
];
const Item=({title})=>{
return(
<View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
</View>
 
);
 
};
const app = () => {
  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={({item})=><Item title={item.title}/>}
        keyExtractor={item=>item.id}
        />
    </SafeAreaView>
  );
};
 
export default app;
 
const styles = StyleSheet.create({
container:{
flex:1,
margintop:20,
},
item:{
backgroundColor:'gray',
padding:20,
marginHorizontal:20,
marginVertical:20,
},
title:{
fontsize:32,
},
 
 
 
 
});