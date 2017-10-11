import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Header from './components/header';
import Image from './components/image';
import Footer from './components/footer';
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
    const apiUrl =`https://maps.googleapis.com/maps/api/streetview?size=600x600&location=${term}&heading=151.78&pitch=-0.76&key=`
    const imageUrl = `${apiUrl}${API_KEY}`

    axios.get(imageUrl, {
      responseType:'blob'
    })
    .then(response => response.data)
    .then(blob => URL.createObjectURL(blob))
    .then(src => this.setState({ src }))
    // .catch(console.log('error'))
}

  render() {
    const poemSearch = _.debounce((term) => { this.poemSearch(term) }, 300);

    return (
      <div className="container">
          <section>
            <Header className="column"/>
            <SearchBar className="column" onSearchTermChange={this.poemSearch} />
            <br />
          </section>
            <section>
              <Image className="column" src={this.state.src} />
            </section>
            <section>
              <br />
              <Footer />
            </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
