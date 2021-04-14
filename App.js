import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Add a ToDo here!");
  const items = ["shopping", "washing dishes"];
  return (
    <View style={styles.container}>
      <View style={{flex:2}}>
        <Text style={styles.headline}>My ToDo's</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Add ToDo here!"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => Alert.alert("Test")}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.scrollview], {  height: 400 }}>
        {items.map(item => (
          <Text style={styles.listitem} key={Math.random().toString()}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headline: {
    fontSize: 45,
    color: 'orange',
    flex: 1
  },
  inputArea: {
    flex: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 6,
    borderWidth: 1,
    borderRadius: 5.0
  },
  button: {
    height: 40,
  },
  buttonText: {
    color: 'orange'
  },
  scrollview:{
    flex: 2
  },
  listitem: {
    fontSize: 20,
    marginTop: 20,
    flex: 1
  }
});
