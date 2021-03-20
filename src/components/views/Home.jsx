import { useEffect, useState } from "react";
import axios from "axios";

// import Header from "../Headers/Header";
import { Container } from "react-bootstrap";
import ListFlickr from "./ListFlickr";

export default function Home(props) {

    const [data, setData] = useState([]),
        [page, setPage] = useState(1),
        [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getData = async() => {
            setLoading(true)
            try {
                let url = `https://aia-flickr-backend.herokuapp.com/?page=${page}`
                let response = await axios.get(url)
                setData(response.data.photos)
                setLoading(false)
            } catch (e) {
                console.log(e.message);
                setLoading(true)
            }
        };
        getData();
    }, [page]);

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
            {/* <Header /> */}
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
    )
}
