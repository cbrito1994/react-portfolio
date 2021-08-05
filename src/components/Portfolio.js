import React from 'react'
import PortfolioProjects from './PortfolioProjects'

function Portfolio() {
    return (
        <main className="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio__projects">
                <PortfolioProjects photoClass="mainPicture" title="Covid Tracker" techs="HTML / JS / Foundation" link={"https://github.com/gutihi85/covid_tracker"} />
                <PortfolioProjects photoClass="secondPic" title="Password Generator" techs="HTML / JS / CSS" link={"https://github.com/cbrito1994/H3-Password-Generator"} />
                <PortfolioProjects photoClass="thirdPic" title="Hockey Quiz" techs="HTML / JS / CSS" link={"https://github.com/cbrito1994/P4-Hockey-Quiz"} />
            </div>
        </main>
    )
}

export default Portfolio
