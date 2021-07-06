import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './database';


export default class App extends React.Component {
    constructor(){
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render(){
    return(
      <View style={styles.container}>
       <Header
      backgroundColor = {'#1BB19B'}
      centerComponent = {{
      text: 'Dictionary',
      style: { color: '#fff', fontSize: 18},
      }}
        />

        <TextInput
         style={styles.inputBox}
      onChangeText={text => {
        this.setState({ text: text});
      }}
        value={this.state.text}/>
      
      <TouchableOpacity>
      style={styles.goButton}
      var word = dictionary[text]["word"]
      var definition = dictionary[text]["definition"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      onPress = {()=> {
        this.setState({ 
          "word" : word,
          "lexicalCategory" : lexicalCategory,
          "defintion" : definition,
         });
      }}>
           <Text style ={styles.buttonText}>GO</Text>
       </TouchableOpacity>
       <Text style = {styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
      }
        }



        const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#E7AA99',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
        });

