import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Header from './components/header';
import Image from './components/image';
import axios from 'axios';

const API_KEY = 'AIzaSyAyjKtfy4rLG-aT43zbbLx4mwAs3lW9b0M';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: ''
    };
    this.poemSearch = this.poemSearch.bind(this);
  }

  poemSearch(term) {
    console.log('inpoemsearch')
    const apiUrl =`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${term}&heading=151.78&pitch=-0.76&key=`
    const imageUrl = `${apiUrl}${API_KEY}`

    // console.log(imageUrl)
    // axios.request({
    //  url: imageUrl,
    //  responseType: 'blob',
    // })
    // .then(response => response.data)
    // .then(blob => URL.createObjectURL(blob))
    // .then(image => this.setState({ image }))  // OR imageEl.setAttribute("src", src);
    // .catch(console.log('error'));

    axios.get(imageUrl, {
      responseType:'blob'
    })
    .then(response => response.data)
    .then(blob => URL.createObjectURL(blob))
    .then(src => this.setState({ src }))
    console.log(src)

 //  .then(function(image) {
 //    image.type('image/jpeg');
 //    image.end(image.data, 'binary');
 // });


}


  render() {
    const poemSearch = _.debounce((term) => { this.poemSearch(term) }, 300);

    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={this.poemSearch} />
        <Image src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
