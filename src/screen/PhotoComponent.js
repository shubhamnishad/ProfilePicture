import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class PhotoComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.route.params.uri,"************");
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                 <Image style={{height:500,width:300}} source={{uri: this.props.route.params.uri}}/>
            </View>
        )
    }
}
