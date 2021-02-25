import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Snackbar from 'react-native-snackbar';
export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadSource: null
        }
    }
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 200,
            maxHeight: 200,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, response => {
            console.log("Response = ", response);
            if (response.didCancel) {
                console.log("User cancelled photo picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else {
                let source = { uri: response.uri };
                this.setState({
                    uploadSource: source
                });
                console.log(this.state.uploadSource)
            }
        });
    }
    renderDefault() {
        return (
            <Image style={styles.avatar} source={require('../../image/Capture.png')} />
        )
    }
    renderImage() {
        console.log(this.state.uploadSource.uri.toString(),"****************");
        return (
            <Image style={styles.avatar} source={{ uri: this.state.uploadSource.uri }} />
        )
    }
    photoNavigation(){
        console.log('**************');
        if(this.state.uploadSource){
            this.props.navigation.navigate('Photo',{uri:this.state.uploadSource.uri})
        }else{
           
            Snackbar.show({
                text: 'Please Select Profile Picture',
                duration: Snackbar.LENGTH_SHORT,
              });
        }
    }
    render() {
        const displayImage = this.state.uploadSource ? this.renderImage() : this.renderDefault()
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <TouchableOpacity style={styles.avatarTouch} onPress={this.selectPhotoTapped.bind(this)}>
                    {displayImage}
                </TouchableOpacity>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <TouchableOpacity
                         style={styles.buttonContainer}
                         onPress={()=>this.photoNavigation()}
                         >
                            <Text>{this.state.uploadSource ? 'Done' : 'Select Picutre'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        // marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
    },
    avatarTouch: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});
