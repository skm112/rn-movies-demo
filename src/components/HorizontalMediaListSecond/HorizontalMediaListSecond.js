import { View, FlatList } from 'react-native'
import React from 'react'
import { MediaCard, SubHeader } from '../index'
import { useNavigation } from '@react-navigation/native'



/**
 * @param {{ title: string, mediaList: any[], mediaType: "movie"|"tv", containerStyle: StyleProp<ViewStyle> | undefined}} props
 * @return {JSX.Element}
 */
const HorizontalMediaListSecond = ({ title, mediaList, mediaType, containerStyle }) => {

    const navigation = useNavigation()
    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`
    const renderItem = ({ item, index }) => (<MediaCard
        poster={item?.poster_path}
        onPress={() => {
            // alert(JSON.stringify({ id: item.id, mediaType }))
            navigation?.push("MediaDetail", { id: item.id, mediaType })
        }}
    />)


    return (
        <View style={containerStyle}>
            <SubHeader
                title={title}
                hideIcon={true}
            // onPress={() => navigation.navigate('DetailedList', { title, reducerName })}
            />
            <FlatList
                scrollEnabled={false}
                numColumns={2}
                // horizontal={true}
                // showsHorizontalScrollIndicator={false}
                data={mediaList ?? []}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>


    )
}

export default HorizontalMediaListSecond
