import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator
        size="small"
        //   color="#0000ff"
      />
    </View>
  );
};

export default Loader;
