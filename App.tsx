/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/** Functuinal Component */
import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import mackbook from "./mackbook.jpg" //memanggil gambar dalam file kodingan


const App = () => {   //Modelnya functional bisa gini
  return (
    <StylingReactNativeComponent />
  ); 
};


//Membuat styling React Native Component ---Fix UI----
//Kalo ukuran atas dan bawah sama, bisa memakai PADDING VERTICAL
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text} >Styling Component</Text>
      <View style={{width: 100, height:100, backgroundColor: "#0abde3", borderWidth: 2, borderColor: "#5f27cd", marginTop: 20, marginLeft: 20, borderRadius: 8}}/>

      <View style={{padding:12, backgroundColor:"#F2F2F2", width: 212}}>
        <Image source={mackbook} style={{width:188, height:107, borderRadius: 8}}/>
        <Text style={{fontSize: 14, fontWeight: "bold", marginTop: 16, color: "black"}}>New Mackbook Pro 2019</Text>
        <Text style={{fontSize: 12, fontWeight:"bold", color: "#F2994A"}}>Rp. 25.000.000</Text>
        <Text style={{fontSize:12, fontWeight:"300", marginTop: 12, color:"black"}}>Jakarta Barat</Text>
        <View style={{backgroundColor:"#6FCF97", paddingTop:6, paddingBottom: 6, borderRadius:25, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight:"600", color:"white", textAlign:"center"}}>BELI</Text>
        </View>
      </View>
    </View>
  );
};


//Membuat styling dengan Stylesheet
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10ac84",
    marginLeft: 20,
    marginTop: 40,
  },
});


//Disimpan jadi satu ke dalam komponen yang besar
const SampleComponent = () => {
  return (
    <View style={{width: 80, height: 80, backgroundColor: "red"}}>
      <Text>Nur Ika</Text>
      <Home />
      <Text>Oktavia</Text>
      <Text>Mobile Developer</Text>
      <Foto />
      <Text>Wakwaw</Text>
      <TextInput style={{borderWidth: 1}}/>
      <BoxGreen />
      <Profile />
    </View>
  ); 
}

const Home = () => {
  return <Text>Aini</Text>
};

const Foto = () => {
  return (
    <Image source={{uri: "https://placekitten.com/100/100"}} style={{width: 100, height: 100}}/>
  );
};

//Class Component
class BoxGreen extends Component {
  render(){
    return <Text>Ini Component Class</Text>
  };
};

//Class Component
class Profile extends Component {
  render(){
    return (
      <View>
        <Image source={{uri: "https://placekitten.com/100/100"}} style={{width:100, height:100}} />
        <Text>Ini Hewan</Text>
      </View>
    );
    
  };
};

export default App;
