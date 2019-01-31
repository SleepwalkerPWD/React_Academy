import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import CharacterPage from '../pages/charactersPage';
import ErrorMessage from '../errorMessage';
import gotService from '../../service/gotService';

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
            <> 
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

                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />
                </Container>
            </>
        );
    }
};
