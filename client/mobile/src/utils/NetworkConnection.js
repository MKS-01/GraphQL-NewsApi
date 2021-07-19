import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

let currentNetwork;

NetInfo.fetch().then(state => {
  currentNetwork = state.isConnected;
});

const NetworkConnection = () => {
  const [netInfo, setNetInfo] = useState(currentNetwork);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return netInfo;
};

export default NetworkConnection;
