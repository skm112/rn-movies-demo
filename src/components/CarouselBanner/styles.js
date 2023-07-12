import { StyleSheet } from "react-native";

export const CarouselBannerStyles = (width) => StyleSheet.create({
    itemContainer: {
        minWidth: width,
        minHeight: width / 2
    },
    safeArea: {
        minHeight: width / 2
    },
    container: {
        minHeight: width / 2,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})