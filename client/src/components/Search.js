import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export default function Search() {
    return (
        <Form className="d-flex">
            <InputGroup>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="has-feedback"
                    aria-label="Search"
                    style={{ border: 'none' }}
                />
                <InputGroup.Text
                    style={{ backgroundColor: 'white', border: 'none' }}
                >
                    <i className="bi bi-search input-group-append"></i>
                </InputGroup.Text>
            </InputGroup>
        </Form>
    );
}
