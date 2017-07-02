import React from 'react'
import {
    View,
    Text,
    Image
} from "react-native";
import style from '../../styles/Styles'
import row from '../../styles/Row'
import moment from 'moment'
import FadeInView from '../animation/fadeInView'
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
        if (this.props.index === 0) {
            switch (type) {
                case 'clouds':
                    img = require('../icons/weather/clouds-white.png');
                    break;
                case 'rain':
                    img = require('../icons/weather/rain-white.png');
                    break;
                default:
                    img = require('../icons/weather/sun-white.png');
                    break;
            }
        } else {
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
        }
        return <Image source={img} style={{width: size, height: size}} />
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('dddd');
        if (this.props.index === 0) {
            return (
                <Text style={[row.white, row.bold]}>{day.toUpperCase()}</Text>
            )
        } else {
            return (
                <Text style={[row.purple, row.bold]}>{day.toUpperCase()}</Text>
            )
        }
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        if (this.props.index === 0) {
            return (
                <Text style={row.white}>{date}</Text>
            )
        } else {
            return (
                <Text style={row.purple}>{date}</Text>
            )
        }
    }

    render() {
        if (this.props.index === 0) {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={[row.flex, row.view, row.firstView]}>
                        <View>
                            <Text style={{marginBottom: 6}}>{this.day()} {this.date()}</Text>
                            {this.setIcon(64)}
                        </View>

                        <Text style={[row.white, row.bold, row.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)}°C</Text>
                    </View>
                </FadeInView>
            )
        } else {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={[row.flex, row.view]}>
                        <View style={row.flex}>
                            {this.setIcon()}
                            <Text style={{marginLeft: 18}}>{this.day()} {this.date()}</Text>
                        </View>

                        <Text style={[row.purple, row.bold, row.temp]}>{Math.round(this.props.day.temp.day)}°C</Text>
                    </View>
                </FadeInView>
            )
        }
    }
}