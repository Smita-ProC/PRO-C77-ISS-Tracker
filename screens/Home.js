import React, { Component } from 'react';
import { Text, View,SafeAreaView,Platform,StatusBar,StyleSheet , TouchableOpacity} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}> ISS Tracker App</Text>
            </View>

            <TouchableOpacity style={styles.routeCard}>
              <Text style={styles.routeText}>Iss Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard}>
              <Text style={styles.routeText}>Meteors</Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink"
  },
  droidSafeArea:{
    marginTop:Platform.OS === "android"? StatusBar.currentHeight:0
  },
  titleContainer:{
    flex:0.25,
    justifyContent:'center',
    alignItems:'center'
  },
  titleText:{
    fontSize:40,
    fontWeight:800,
    color:"white"
  },
  routeText:{
    fontSize:35,
    fontWeight:"bold",
    marginTop:75,
    paddingLeft:30
  }
  ,
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:"white"
  }
})
