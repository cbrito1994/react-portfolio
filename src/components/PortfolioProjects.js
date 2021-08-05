import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

function PortfolioProjects({ photoClass, title, techs, link }) {
    return (
        <div className={`portfolioProjects ${photoClass}`}>
            <div className="portfolioProjects__overlay">
                <div className="pictures__info">
                    <h2>{title}</h2>
                    <p>{techs}</p>
                    <GitHubIcon onClick={() => window.open(link)} rel="noopener noreferrer" />
                </div>
            </div>
        </div>
)
}

export default PortfolioProjects
