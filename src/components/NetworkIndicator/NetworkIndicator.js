import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from '@react-navigation/native';
import { NetworkIndicatorStyles } from './styles';

const NetworkIndicator = () => {
    const { isInternetReachable } = useNetInfo();
    const { colors } = useTheme();
    const styles = NetworkIndicatorStyles(colors);
    const [internetState, setInternetState] = useState('connected');


    useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (isInternetReachable) {
                setInternetState('now_connected');
                setTimeout(() => {
                    setInternetState('connected')
                }, 5000);


            } else {
                setInternetState('disconnected');
            }

        }

        return () => {

            isActive = false;

        }
    }, [isInternetReachable])

    // if (internetState == 'now_connected') {
    //     return (
    //         <View style={[styles.container, styles.successContainer]}>
    //             <Text style={styles.text}> Connected to Internet</Text>
    //         </View>
    //     )
    // }

    if (internetState == 'disconnected') {
        return (
            <View style={[styles.container, styles.errorContainer]}>
                <Text style={styles.text}>Not connected to Internet</Text>
            </View>
        )
    }

    return null
}

export default NetworkIndicator

