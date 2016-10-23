import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBUMzVL1YDCiaIR6306vsjz8x8fS7fcMJA';


class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		 };

		 this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				selectedVideo: videos[0],
				videos: videos
			 });
		});
	}

	render() {

		// this.videoSearch will only be triggered after an interval no less than 300ms
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

	    return (
	        <div>
	            <SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
	        </div>
	    );
    }
}

ReactDOM.render( < App / > , document.querySelector('.container'));
