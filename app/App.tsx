import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationScreenProp} from 'react-navigation';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

function HomeScreen({navigation}: NavigationProps) {
  const onPressButton = () => {
    console.log('onPressButton');
    navigation.navigate('Chat');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={onPressButton} title="Go to chat" color="#841584" />
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'Chats',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
