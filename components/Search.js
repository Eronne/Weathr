import React from 'react'
import {
    View,
    Image,
    Button,
    TextInput
} from 'react-native'

import style from '../styles/Styles'

export default class Search extends React.Component {
    static navigationOptions = {
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

    render () {
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid='transparent'
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)} />

                <Button color={style.color} onPress={() => this.submit()} title={'Rechercher'} />
            </View>
        );
    }
}