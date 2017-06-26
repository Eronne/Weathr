import React from 'react'
import {
    View,
    Text,
    Image
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

    setIcon(size = 50) {
        const type = this.props.day.weather[0].main.toLowerCase();
        let img;
        switch (type) {
            case 'clouds':
                img = require('../icons/weather/clouds.png');
                break;
            case 'rain':
                img = require('../icons/weather/rain.png');
                break;
            default:
                img = require('../icons/weather/sun.png');
                break;
        }
        return <Image source={img} style={{width: size, height: size}} />
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('dddd');
        return (
            <Text style={[row.white, row.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text style={row.white}>{date}</Text>
        )
    }

    render() {
        return (
            <View style={row.view}>
                {this.setIcon()}
                <View>
                    <Text>{this.day()} {this.date()}</Text>
                    <Text style={[row.white, row.bold, row.temp]}>{this.props.day.temp.day}°C</Text>
                </View>
            </View>
        )
    }
}