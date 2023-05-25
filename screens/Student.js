import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

const Student = () => {
  const [id, setID] = useState('');
  const [displayText, setDisplayText] = useState('');


  const handleIDChange = (text) => {
    setID(text);
  };

  const handleSubmit = () => {
    // Perform any action with the form data
    if (id === '996633') {
      setDisplayText('Your ID is correct');
    }
    else {
      setDisplayText(`${id}`);
    }
  
  };



  return (
    <View>
      <Button color="gray" title="Scan QR Code"/>
      <TextInput style={styles.text_input1}
        placeholder="ID"
        value={id}
        onChangeText={handleIDChange}
      />
      <Button color="gray" title="Submit" onPress={handleSubmit} />
      <Text>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text_input1: {
    width: 200,
    margin: 2,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  },  
});

export default Student;
