import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderPage from './src/components/HeaderPage';
import AlbumList from './src/components/AlbumList';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}> 
        <HeaderPage headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;

