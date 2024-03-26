import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogScreen from './component/BlogScreen';
import ArticleDetailScreen from './component/ArticleDetailScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{ title: 'Blog' }}
        />
        <Stack.Screen
          name="ArticleDetail"
          component={ArticleDetailScreen}
          options={{ title: 'Comment apprendre efficacement ?',
          headerLeft: (props) => {
            return <AntDesign name="left" size={24} color="black" style={{margin: 10}} onPress={props.onPress} />

          },
          headerTitleStyle: { 
            fontSize: 16, // Taille du texte
            fontWeight: 'bold', // Gras
            color: '#333', // Couleur du texte
            paddingRight: 50,
          }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
