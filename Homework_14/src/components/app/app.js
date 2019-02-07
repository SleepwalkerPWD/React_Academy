import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import CharactersPage from '../pages/charactersPage';
import BooksItem from '../pages/booksItem';
import ErrorMessage from '../errorMessage';
import gotService from '../../service/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';




export default class App extends Component {
    gotService = new gotService();

    constructor (props){
        super(props);
        this.state = {
            showReply: true,
            error: false
        }
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }


    onDelete(e) {
        e.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }

    render() {
        const onDelete = this.onDelete;

        if(this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className='app'> 
                    <Container>
                            <Header />
                        </Container>
                        <Container>
                            <Row>
                                <Col lg={{size: 5, offset: 0}}>
                                <button 
                                    type = 'button'
                                    className = 'del-button'
                                    onClick = {onDelete}>
                                    Remove !
                                </button>
                                    {this.state.showReply && <RandomChar />}
                                </Col>
                            </Row>

                            <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} />
                            <Route path='/characters' component={CharactersPage} />
                            <Route path='/houses' component={HousesPage} />
                            <Route path='/books' exact component={BooksPage} />
                            <Route path='/books/:id' render={
                                ({match}) =>{
                                    const {id} = match.params;
                                return <BooksItem bookId={id}/>}
                            }/>
                    </Container>
                </div>
            </Router>
        );
    }
};
