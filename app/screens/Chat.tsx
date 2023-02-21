import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationScreenProp} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

const Chat = (props: Props) => {
  const onPressButton = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chat</Text>
      <Button onPress={onPressButton} title="Go Home" color="#841584" />
    </View>
  );
};

export default Chat;
