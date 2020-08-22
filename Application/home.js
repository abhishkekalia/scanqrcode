import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class Home extends Component {
    onSuccess = e => {
        this.props.navigation.push('Product', { productId: e.data });

        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent:"center", alignItems:"center" }}>
                    <Text style={styles.centerText}>Place the Qr code Inside the area</Text>
                    <Text style={styles.textBold}>Scanning will start automatically</Text>
                </View>
                <View style={styles.qrcode}>
                    <QRCodeScanner
                        onRead={this.onSuccess}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    // topContent={
                    //     <View style={{ justifyContent: "center" }}>
                    //         <Text style={styles.centerText}>Place the Qr code Inside the area</Text>
                    //     </View>

                    // }
                    // bottomContent={
                    //     <Text style={styles.textBold}>Scanning will start automatically</Text>
                    // }
                    />
                </View>
                <View style={{ flex: 1 }} >
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    qrcode: {
        flex: 1
    },
    centerText: {
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        // fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});