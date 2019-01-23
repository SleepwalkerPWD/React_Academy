import React from 'react';

import './post-add-form.css';

import styled from 'styled-components';

const bottomPanel = styled.div`
    margin-top: 20px;
`


const PostAddForm = ({onAdd}) => {
    return (
        <bottomPanel className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="о чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('Hello')}>
                Добавить</button>
        </bottomPanel>
    )
}

export default PostAddForm;