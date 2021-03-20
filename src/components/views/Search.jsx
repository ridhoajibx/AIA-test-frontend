import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Container } from "react-bootstrap";
import ListFlickr from "./ListFlickr";

const Search = () => {
    const [data, setData] = useState([]),
        [page, setPage] = useState(1),
        [loading, setLoading] = useState(false);
    
    let { query } = useParams();

    useEffect(() => {
        const getData = async() => {
            setLoading(true)
            try {
                let url = `https://aia-flickr-backend.herokuapp.com/search?tags=${query}&page=${page}`
                let response = await axios.get(url)
                setData(response.data.photos)
                setLoading(false)
            } catch (e) {
                console.log(e.message);
                setLoading(true)
            }
        };
        getData();
    }, [query, page]);

    const nextPage = (e) => {
        e.preventDefault()
        const currentPage = page;
        if (data.page < data.pages) {
            const nextPage = currentPage + 1;
            setPage(nextPage);
        }
    };

    const prevPage = (e) => {
        e.preventDefault()
        const currentPage = page;
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setPage(prevPage);
        }
    };

    return (
        <div>
            <Container>
                <ListFlickr 
                    data={data} 
                    loading={loading} 
                    page={page}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </Container>
        </div>
    );
}

export default Search;
