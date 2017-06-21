import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class About extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.title}>A propos de moi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 10
    }
});