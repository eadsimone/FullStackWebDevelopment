// //  src/components/main-view/main-view.jsx
import React from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import  Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
//
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import {MovieCard} from "../movie-card/movie-card";
// import { DirectorView } from '../director-view/director-view';
// import { RegistrationView } from '../registration-view/registration-view';
// import { GenreView } from '../genre-view/genre-view';
// import { ProfileView2 } from '../profile-view/profile-view-2';
// import { ProfileUpdate } from '../profile-view/profile-update';
//
// import './main-view.scss';
//
// export class MainView extends React.Component {
//   constructor() {
//     super(props);
//
//     this.state = {
//       movies: [],
//       user: null,
//       register: false,
//     };
//   }
//
//   componentDidMount() {
//     const accessToken = localStorage.getItem('token');
//     if (accessToken !== null) {
//       this.setState({
//         user: localStorage.getItem('user'),
//       });
//       this.getMovies(accessToken);
//     }
//   }
//
//   // LOG IN
//   onLoggedIn(authData) {
//     console.log(authData);
//     this.setState({
//       user: authData.user.Username,
//     });
//     localStorage.setItem('token', authData.token);
//     localStorage.setItem('user', authData.user.Username);
//     this.getMovies(authData.token);
//   }
//
//   // button to return back
//   onButtonClick() {
//     this.setState({
//       selectedMovie: null,
//     });
//   }
//
//   getMovies(token) {
//     axios
//       .get('https://myflix-movies.herokuapp.com/movies', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         // Assing the result to the state
//         this.setState({
//           movies: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//
//   // LOG
//   handleLogout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     this.setState({
//       user: null,
//     });
//     window.open('/', '_self');
//   }
//
//   register() {
//     this.setState({
//       register: true,
//     });
//   }
//
//   updatUser(data) {
//     this.setState({
//       userInfo: data,
//     });
//     localStorage.setItem('user, data.Username');
//   }
//
//   alreadyMember() {
//     this.setState({
//       register: false,
//     });
//   }
//
//   render() {
//     const {
//       movies, user, register,
//     } = this.state;
//
//     if (register) {
//       return (
//         <RegistrationView
//           onCLick={() => this.alreadyMember()}
//           onSignedIn={(user) => this.onSignedIn(user)}
//         />
//       );
//     }
//     // Before the movie has been loaded
//     if (!movies) return <div className="main-view" />;
//
//     return (
//       <Router>
//         <Navbar bg="light">
//           <Navbar.Brand>MyFLix Movies</Navbar.Brand>
//           <Link to="/profile">
//             <Button className="profile-btn" variant="link">
//               User Profile
//             </Button>
//           </Link>
//           <Button
//             variant="link"
//             className="logout-button"
//             type="submit"
//             onClick={() => this.handleLogout()}
//           >
//             Log Out
//           </Button>
//         </Navbar>
//         <Container className="container">
//           <div className="main-view">
//             <Route
//               exact
//               path="/"
//               render={() => {
//                 if (!user) return <LoginView onLoggedIn={(userLV) => this.onLoggedIn(userLV)} />;
//                 return movies.map((m) => <MovieCard key={m._id} movie={m} />);
//               }}
//             />
//             <Route path="/register" render={() => <RegistrationView />} />
//             <Route
//               exact
//               path="/movies"
//               render={() => movies.map((m) => <MovieCard key={m._id} movie={m} />)}
//             />
//             <Route
//               path="/movies/:movieId"
//               render={({ match }) => (
//                 <MovieView movie={movies.find((m) => m._id === match.params.movieId)} />
//               )}
//             />
//             <Route
//               path="/genres/:name"
//               render={({ match }) => {
//                 if (!movies) return <div className="main-view" />;
//                 return (
//                   <GenreView genre={movies.find((m) => m.Genre.Name === match.params.name).Genre} />
//                 );
//               }}
//             />
//             <Route
//               path="/directors/:name"
//               render={({ match }) => {
//                 if (!movies) return <div className="main-view" />;
//                 return (
//                   <DirectorView
//                     director={movies.find((m) => m.Director.Name === match.params.name).Director}
//                   />
//                 );
//               }}
//             />
//             <Route path="/profile" render={() => <ProfileView2 />} />
//             <Route path="/update" render={() => <ProfileUpdate />} />
//           </div>
//         </Container>
//       </Router>
//     );
//   }
// }
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJGYXZvcml0ZU1vdmllcyI6W10sIl9pZCI6IjVlNGFjZWZlMjE0MjNhNjJkMWM3ZmRjZSIsIlVzZXJuYW1lIjoiZWFkZXNpbW9uZSIsIlBhc3N3b3JkIjoiJDJhJDEwJDFSeVlKbm8xUVlqMk9VLlVoR2Rvc084UkpvOGRSdHhmVHh2bHFVTWl6S2x5WlZxN3hDT29xIiwiRW1haWwiOiJlYWRlc2ltb25lQGdtYWlsLmNvbSIsIl9fdiI6MCwiaWF0IjoxNTgzNzE3MTM1LCJleHAiOjE1ODQzMjE5MzUsInN1YiI6ImVhZGVzaW1vbmUifQ.Z5itPKKm4gBTAr54p-qlC8aE0ILSTNasMwr_tjxi898";

export class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: null,
            selectedMovie: null,
            user: null
        };
    }


    // One of the "hooks" available in a React Component
    componentDidMount() {
        //     axios
        axios.get('https://myflix-movies.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` },
        })
            //       axios.get('https://myflix-movies.herokuapp.com/movies')
            .then((response) => {
                // Assing the result to the state
                this.setState({
                    movies: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    handleBackClick() {
        this.setState({
            selectedMovie: null
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, user } = this.state;

        // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        // Before the movies have been loaded
        if (!movies) return <div className="main-view"/>;

        return (
            // <div className="main-view">
            //     {selectedMovie
            //         ? <MovieView movie={selectedMovie}/>
            //         : movies.map(movie => (
            //             <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
            //         ))
            //     }
            // </div>
            <div>
                <Container>
                    <Row>
                        {selectedMovie
                            ? <Col><MovieView onClick={this.handleBackClick} movie={selectedMovie}/></Col>
                            : movies.map(movie => (
                                <Col><MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/></Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}
