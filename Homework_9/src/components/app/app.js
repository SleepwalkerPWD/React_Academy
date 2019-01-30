import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import CharacterPage from '../characterPage';
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
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                     </Row> 
                </Container>
            </>
        );
    }
};
