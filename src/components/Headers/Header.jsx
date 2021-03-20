import {
    Button,
    Navbar,
    Form,
    FormControl
} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/">Flickr API Consume</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="my-sm-2" id="basic-navbar-nav">
                    <Form inline className="ml-auto mt-md-0 mt-2">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="d-none d-md-block" variant="primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
