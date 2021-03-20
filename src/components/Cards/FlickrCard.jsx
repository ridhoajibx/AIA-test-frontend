import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loadingSVG from '../../assets/loading.svg'

export default function FlickrCard({ data, loading }) {
    return (
        <div>

            {loading &&
                <div className="d-flex align-items-center">
                    <img src={loadingSVG} style={{ width: '100%', height: '150px' }} alt="Loading..." />
                </div>
            }
            <Row>
                {!loading && data.photo &&
                    data.photo.map((image, id) => {
                        return (
                            <Col xs={12} md={3} sm={6} key={id}>
                                <Card className="mt-2 shadow-lg">
                                    <Card.Img
                                        className="imageCard"
                                        variant="center"
                                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                                        alt="image not found"
                                        rounded="true"
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {
                                                image.title.length >= 30 ? image.title.substring(0,30) + '...' : 
                                                (image.title === "" ) ? 'no title' : image.title
                                            }
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body>
                                        <Link className="btn btn-sm btn-primary" to={`/photo/${image.id}`}>Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })

                }
            </Row>
        </div >
    )
}
