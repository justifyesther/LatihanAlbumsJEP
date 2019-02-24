import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then(response => {
                 console.log(response.data);
                 this.setState({ albums: response.data });
        });
    }

    renderAlbums = () => {
        const listJSX = this.state.albums.map((item) => {
            return (
                <AlbumDetail key={item.title} album={item} />
            );
        });

        return listJSX;
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

