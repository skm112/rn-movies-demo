import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { MediaCard, SubHeader } from '../index'
import { useNavigation } from '@react-navigation/native'

const HorizontalMediaList = ({ title, reducerName, mediaType }) => {
    const mediaReducer = useSelector(s => s?.[reducerName] ?? [])
    const navigation = useNavigation()
    const keyExtractor = (item, index) => `id-${item.id}-index-${index}`
    const renderItem = ({ item, index }) => (<MediaCard
        poster={item?.poster_path}
        onPress={() => navigation?.navigate("MediaDetail", { id: item.id, mediaType })}
    />)

    if (mediaReducer?.data?.length==0) {
        return null
    }

    return (
        <View>
            <SubHeader
                title={title}
                onPress={() => navigation.navigate('DetailedList', { title, reducerName, mediaType })}
            />
            <FlatList
                horizontal={true}
                data={mediaReducer?.data ?? []}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>


    )
}

export default HorizontalMediaList
