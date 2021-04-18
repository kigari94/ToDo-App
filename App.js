import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItem] = useState([])

  const onChangeTextHandler = enteredText => {
    setText(enteredText);
  };

  const pressButtonHandler = () => {
    setItem(items => [...items, { id: Math.random().toString(), text: text }]);
    setText('');
  };

  const pressItemHandler = id => {
    setItem(items => {
      return items.filter(item => item.id !== id)
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={styles.headline}>My ToDo's</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Add ToDo here!"
          onChangeText={onChangeTextHandler}
          value={text}
        />
        <TouchableOpacity
          onPress={pressButtonHandler}
        >
          <Text style={styles.button}>ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.contentContainerStyle}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => { pressItemHandler(item.id) }}
            style={styles.listItemBox}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  headline: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 20
  },
  inputArea: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    marginBottom: 30
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
    fontSize: 20,
    color: 'white',
    backgroundColor: 'orange',
    padding: 8,
    borderWidth: 1,
    borderRadius: 5.0
  },
  scrollview: {
    width: '80%',
    height: 400
  },
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center'
  },
  listItemBox: {
    flex: 1,
    marginVertical: 15,
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  listItemText: {
    fontSize: 20,
    marginTop: 10
  }
});
