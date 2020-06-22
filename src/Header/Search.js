import React from 'react'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <Form inline className="flex-grow-1 justify-content-center">
            <span className="searchLogo"><FontAwesomeIcon icon={faSearch} /></span>
            <FormControl type="text" placeholder="Search for products" className="mr-sm-2 w-75 main-search-box" />
        </Form>
    )
}

export default Search;