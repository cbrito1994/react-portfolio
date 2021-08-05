import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

function Pages() {
    const [pageUrl, setPageUrl] = useState();
    const { pages } = useParams();

    useEffect(() => {
        setPageUrl(pages)
    }, [pages])
    
    return (
        <>
            {pageUrl === "portfolio" && <Portfolio />}
            {pageUrl === "contact" && <Contact />}
            {pageUrl === "resume" && <Resume />}
        </>
    )
}

export default Pages
