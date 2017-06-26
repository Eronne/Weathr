import React from 'react'
import About from './components/About'
import Search from './components/Search'
import { TabNavigator } from 'react-navigation'
import {
    View,
    StatusBar,
    StyleSheet
} from "react-native";
import style from './styles/Styles'

const Tabs = TabNavigator ({
    Search: {screen: Search},
    About: {screen: About}
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            backgroundColor: '#ecf0f1'
        },
        style: {
            backgroundColor: '#7566A9'
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true} />
                <Tabs style={styles.bar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        marginTop: 20
    }
});