// //  src/components/main-view/main-view.jsx
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';

import Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import {MovieCard} from "../movie-card/movie-card";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { DirectorView } from '../director-view/director-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView2 } from '../profile-view/profile-view-2';
import { ProfileUpdate } from '../profile-view/profile-update';

import './main-view.scss';
import MoviesList from "../movies-list/movies-list";

export class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            console.log(`accessToken = null`);
            this.setState({
                user: localStorage.getItem('user'),
            });
            this.getMovies(accessToken);
        }

    }
    // LOG IN
    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username,
        });
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    // LOG OUT
    handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null,
        });
        window.open('/', '_self');
    }

    register() {
        this.setState({
            register: true,
        });
    }

    alreadyMember() {
        this.setState({
            register: false,
        });
    }

    getMovies(token) {
        axios
            .get('https://infinite-hollows-27811.herokuapp.com/movies', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => {
                // #1
                this.props.setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let { movies } = this.props;
        let { user } = this.state;

        const renderIndex = () =>{
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            // const movieMapRender = (movies)? movies.map(movie =>
            //     <MovieCard key={movie._id} movie={movie}/>
            // ): '';
            return  (movies)? <MoviesList movies={movies} /> : '';
        };

        // if (register) {
        //     return (
        //         <RegistrationView
        //             onCLick={() => this.alreadyMember()}
        //             onSignedIn={(userParam) => this.onSignedIn(userParam)}
        //         />
        //     );
        // }
        // // Before the movies have been loaded
        // if (!movies) return <div className="main-view"/>;

        return (
            <Router basename="/client">
                <Navbar bg="light">
                    <Navbar.Brand>MyFLix Movies</Navbar.Brand>
                        <Link to="/profile">
                            <Button className="profile-btn" variant="link">
                                User Profile
                            </Button>
                        </Link>
                    <Button
                        variant="link"
                        className="logout-button"
                        type="submit"
                        onClick={() => this.handleLogout()}
                    >
                        Log Out
                    </Button>
                </Navbar>
                <Container>
                        <div className="main-view">
                            <Route exact path="/" render={renderIndex}/>
                            <Route path="/register" render={() => <RegistrationView />} />
                            <Route exact path="/movies" render={renderIndex} />
                            <Route path="/movies/:movieId" render={({match}) => <MovieView movie={movies.find(m => m._id === match.params.movieId)}/>}/>
                            <Route
                                path="/genres/:name"
                                render={({ match }) => {
                                    if (!movies) return <div className="main-view" />;
                                    return (
                                        <GenreView genre={movies.find((m) => m.Genre.Name === match.params.name).Genre} />
                                    );
                                }}
                            />
                            <Route
                                path="/directors/:name"
                                render={({ match }) => {
                                    if (!movies) return <div className="main-view" />;
                                    return (
                                        <DirectorView
                                            director={movies.find((m) => m.Director.Name === match.params.name).Director}
                                        />
                                    );
                                }}
                            />
                            <Route path="/profile" render={() => <ProfileView2 />} />
                            <Route path="/update" render={() => <ProfileUpdate />} />
                        </div>
                </Container>
            </Router>
        );
    }
}

let mapStateToProps = state => {
    return { movies: state.movies }
};

export default connect(mapStateToProps, { setMovies } )(MainView);
