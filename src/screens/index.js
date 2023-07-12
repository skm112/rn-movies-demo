import React from 'react';
import { StatusBar } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Movies from './Movies';
import MyStuff from './MyStuff';
import Search from './Search';
import Tv from './Tv';
import DetailedList from './DetailedList/DetailedList';
import MediaDetail from './MediaDetail';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabs = [
    { name: "MoviesTab", label: "Movies", tabIcon: "video", component: Movies, IconComponent: EntypoIcon },
    { name: "TvTab", label: "TV", tabIcon: "tv", component: Tv, IconComponent: FontAwesomeIcon },
    { name: "SearchTab", label: "Search", tabIcon: "search", component: Search, IconComponent: FontAwesomeIcon },
    { name: "MyStuffTab", label: "My Stuffs", tabIcon: "user", component: MyStuff, IconComponent: EvilIcon },
]

const HomeTabs = () => {
    const { colors } = useTheme()
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: colors.bg }}
            screenOptions={{
                tabBarActiveTintColor: colors.focusedIcon,
                tabBarInactiveTintColor: colors.icon,
                headerShown: false,
                orientation: 'portrait_up'
            }}

        >

            {
                tabs.map(({ name, component, label, tabIcon, IconComponent }) => {
                    return (<Tab.Screen key={name} name={name} component={component} options={{
                        tabBarStyle: { backgroundColor: colors.tabBg },
                        tabBarLabel: label,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <IconComponent name={tabIcon} size={size} color={color} />
                        }
                    }} />)
                })
            }
        </Tab.Navigator>
    )
}

const RootStack = () => {
    const { colors } = useTheme()
    return (<>
        <StatusBar translucent={false} backgroundColor={colors.statusBarBg} animated={true} barStyle={'light-content'} />
        <Stack.Navigator initialRouteName='HomeTabs' screenOptions={{ headerShown: false, orientation: 'portrait_up' }}>
            <Stack.Group>
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen name="DetailedList" component={DetailedList} />
                <Stack.Screen name="MediaDetail" component={MediaDetail} />
            </Stack.Group>
        </Stack.Navigator>
    </>
    )
}

export default RootStack