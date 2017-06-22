import React from 'react'
import {
    View,
    Image,
    Button,
    TextInput
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import style from '../styles/Styles'
import search from '../styles/Search'
import List from './List'

class Search extends React.Component {
    static navigationOptions = {
        title: 'Weathr',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{width: 20, height: 20}} />
        }
    }

    constructor (props) {
        super(props);
        this.state = {
            city: 'Paris'
        }
    }

    setCity (city) {
        this.setState({
            city: city
        })
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render () {
        return(
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    underlineColorAndroid='transparent'
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)} />

                <Button color={style.color} onPress={() => this.submit()} title={'Rechercher'} />
            </View>
        );
    }
}



export default StackNavigator ({
    Search: {screen: Search},
    Result: {screen: List}
})