import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { HeartSvg } from '../../svg'
import AntIcon from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { TitleHeadStyles } from './styles'





const TitleHead = ({ title ,onPress}) => {
    const { colors } = useTheme();
    const styles = TitleHeadStyles(colors);
    return (<>
        <View style={styles.container}>
            <View style={{ marginRight: 16, flex: 1 }}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>

            </View>
            <View style={styles.subContainer}>
                <AntIcon name={"pluscircleo"} size={20} color={colors.icon} />
                <View style={{ width: 8 }} />
                <HeartSvg height={30} width={30} />
            </View>

        </View>
        <Pressable style={styles.linearGradientContainer} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f56437', '#f9c270']} style={styles.linearGradient}>
                <AntIcon name={"play"} size={20} color={colors.icon} />
                <Text style={styles.buttonText}>
                    Watch Trailer
                </Text>
            </LinearGradient>
        </Pressable>

    </>
    )
}


export default TitleHead