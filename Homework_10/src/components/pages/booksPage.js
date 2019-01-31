import React, {Component} from 'react';
// import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../service/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
    
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllBooks}
                        renderItem={({name}) => name}/>
        )
        
        const itemDetails = (
            <ItemDetails 
            itemId={this.state.selectedBook}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='NumberOfPages' />
                <Field field='publiser' label='Publiser' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}