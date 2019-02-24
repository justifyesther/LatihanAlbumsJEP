import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


class AlbumDetail extends Component {
    render() {
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        const { 
            thumbnailStyle, 
            headerContentStyle, 
            headerTextStyle, 
            thumbnailContainerStyle,
            imageStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source={{ uri: thumbnail_image }} 
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                        source={{ uri: image }}
                        style={imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)} >
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 370,
        flex: 1 
        //flex --->> jika gambarnya terpotong akan memenuhi dimana dia dibungkus
        // width: '50%'
    }
};

export default AlbumDetail;

