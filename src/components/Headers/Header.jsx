import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Button,
    Navbar,
    Form,
    FormControl
} from 'react-bootstrap';

export default function Header() {
    const [searchFlickr, setSearchFlickr] = useState("");
    let flickr = useHistory();

    const handleChange = (e) => {
        e.preventDefault()
        setSearchFlickr(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        flickr.push(`/search/${searchFlickr}`);
    }

    return (
        <div>
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/">Flickr API Consume</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="my-sm-2" id="basic-navbar-nav">
                    <Form onSubmit={handleSubmit} inline className="ml-auto mt-md-0 mt-2">
                        <FormControl 
                            type="text" 
                            placeholder="Search" 
                            className="mr-sm-2"
                            onChange={handleChange}
                            value={searchFlickr}
                            required={true}
                        />
                        <Button type="submit" className="d-none d-md-block" variant="primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
