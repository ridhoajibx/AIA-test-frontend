import React from 'react'
import { Row } from 'react-bootstrap'
import FlickrCard from '../Cards/FlickrCard'
import Paginate from '../Pagination/Paginate'

export default function ListFlickr({ data, loading, page, nextPage, prevPage, query }) {
    return (
        <div>
            <Row className="mt-5 pt-2">
                <h4 className="px-4 my-4 text-uppercase font-weight-bold">{query ? `Search : ${query}` : 'Recent Images'}</h4>
            </Row>
            <Paginate 
                data={data}
                page={page}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            <FlickrCard data={data} loading={loading} />
            {!loading && data &&
                <Paginate 
                    data={data}
                    page={page}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            }
        </div>
    )
}
