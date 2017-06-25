import React from 'react'
import {
    View,
    Text
} from "react-native";
import style from '../../styles/Styles'
import row from '../../styles/Row'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr');

export default class Row extends React.Component {
    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    };

    day() {
        let day = moment(this.props.day.dt * 1000).format('dddd');
        return (
            <Text>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text>{date}</Text>
        )
    }

    render() {
        return (
            <View>
                <Text>{this.day()} {this.date()}</Text>
                <Text>{this.props.day.temp.day}°C</Text>
            </View>
        )
    }
}