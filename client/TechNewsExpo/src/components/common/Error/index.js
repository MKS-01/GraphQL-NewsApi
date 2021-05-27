import React from 'react';
import {View, Text} from 'react-native';

const Error = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {props.network ? <Text>s</Text> : <Text>{props.error}</Text>}
    </View>
  );
};

export default Error;
