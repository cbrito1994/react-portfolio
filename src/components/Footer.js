import React from 'react'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <footer>
            <IconButton onClick={() => window.open("https://github.com/cbrito1994")} rel="noopener noreferrer">
                <GitHubIcon />
            </IconButton>
            <IconButton onClick={() => window.open("https://www.linkedin.com/feed/")} rel="noopener noreferrer">
                <LinkedInIcon />
            </IconButton>
        </footer>
    )
}

export default Footer
