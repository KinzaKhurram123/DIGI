import React from 'react';
import {View, ImageBackground} from 'react-native';
import { images } from '../Constant';

export default function Background ({ children })  {
  return (
    <View>
      <ImageBackground source={images.splash_screen} style={{ flex: 1 }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
};


