import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            showReply: true
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(e) {
        console.log('test');
        e.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }

    render() {
        const onDelete = this.onDelete;

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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
