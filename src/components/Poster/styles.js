import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        borderRadius: 5
    },
    imageSizeOne: {
        width: width / 2 - 24,
        height: (width - 48) / 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageSizeTwo: {
        width: width / 3 - 16,
        height: width / 3
    }
})