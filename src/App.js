// import { Component } from 'react';
// import Searchbar from './Components/Searchbar/Searchbar';
// import ImageInfo from './Components/ImageInfo/ImageInfo';
// import { ToastContainer } from 'react-toastify';
// import { useState } from 'react';
import AppBar from './ComponentsTest/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import PokemonDetailsView from './views/PokemonDetailsView';
// export default function App() {
//   const [imageTitle, setImageTitle] = useState('');

//   return (
//     <>
//       <Searchbar onSubmit={setImageTitle} />
//       <ImageInfo imageTitle={imageTitle} />
//       <ToastContainer />
//     </>
//   );
// }

// export default class App extends Component {
//   state = {
//     imageTitle: '',
//   };

//   handleSearhSubmit = imageTitle => {
//     this.setState({ imageTitle });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearhSubmit} />
//         <ImageInfo imageTitle={this.state.imageTitle} />
//         <ToastContainer />
//       </>
//     );
//   }
// }

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route exact path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/authors/:pokemonName">
          <PokemonDetailsView />
        </Route>

        <Route path="/books">
          <BooksView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
