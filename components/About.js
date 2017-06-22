import React from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import style from '../styles/Styles'

export default class About extends React.Component {
    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/about.png')} style={{width: 20, height: 20}} />
        }
    };

    search () {
        this.props.navigation.navigate('Search')
    }

    render() {
        return(
            <View>
                <Text style={styles.title}>A propos de l'application</Text>
                <Button color={style.color} onPress={() => this.search()} title='Rechercher une ville' />
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