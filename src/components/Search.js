import React from 'react';
import { Form } from 'react-bootstrap';

export default function Search() {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
        </Form>
    );
}
