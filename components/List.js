
import React from 'react'
import {
    Image,
    ActivityIndicator,
    ListView
} from 'react-native'
import axios from 'axios'
import WeatherRow from './weather/Row'
import style from '../styles/Styles'
import list from '../styles/List'

export default class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Ville de ' + navigation.state.params.city,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{width: 20, height: 20}} />
            }
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            datas: null
        };

        setTimeout( () => {
            this.fetchWeather()
        }, 450)
    }

    fetchWeather() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Paris&mode=json&units=metric&APPID=5d792d578f6c08360be6fa5c2feba065')
            .then((response) => {
                this.setState({datas: response.data})
            })
    }

    render() {
        if (this.state.datas === null) {
            return (
                <ActivityIndicator color={style.color} size='large' />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.datas.list)}
                    renderRow={(rowData, key2, key3) => <WeatherRow day={rowData} index={parseInt(key3, 10)} />}
                />
            )
        }
    }
}