import React from 'react'
import {
    View,
    TextInput
} from 'react-native'

export default class Search extends React.Component {
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
            </View>
        );
    }
}