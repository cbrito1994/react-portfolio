import React from 'react'
import { Link } from 'react-router-dom'

function Resume() {
    return (
        <main className="resume">
            <h1>Resume</h1>
            <Link to="/cv">Donwload my CV</Link>
            <section className="resume__frontend">
                <h3>Frontend</h3>
                <ul className="frontend__details">
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
            </section>
            <section className="resume__backend">
                <h3>Backend</h3>
                <ul className="backend__details">
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
            </section>
        </main>
    )
}

export default Resume
