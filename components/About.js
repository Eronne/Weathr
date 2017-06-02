import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class About extends React.Component {
    render() {
        return(
            <View style={styles.view}>
                <Text style={styles.title}>A propos de moi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 28
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }
});