import React from 'react'
import About from './components/About'
import Search from './components/Search'
import { TabNavigator } from 'react-navigation'
import {
    View,
    StatusBar,
    StyleSheet
} from "react-native";

const Tabs = TabNavigator ({
    Search: {screen: Search},
    About: {screen: About}
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={"#ffffff"} />
                <Tabs style={styles.bar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bagitr: {
        marginTop: 20
    }
});