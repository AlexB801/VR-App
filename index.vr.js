import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class FirstVRApp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('skyvr.jpg')}/>
        <Text
          style={{
            // backgroundColor: '#777879',
            fontSize: 0.3,
            // fontWeight: '350',
            layoutOrigin: [0.5, 0.5],
            // paddingLeft: 0.2,
            // paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          First VR App!
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('FirstVRApp', () => FirstVRApp);
