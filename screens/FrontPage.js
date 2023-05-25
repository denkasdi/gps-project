import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FrontPage = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('OtherPage');
  };

  return (
    <View>
      <Text>This is the Front Page</Text>
      <Button title="Go to Other Page" onPress={handleButtonPress} />
    </View>
  );
};

export default FrontPage;
