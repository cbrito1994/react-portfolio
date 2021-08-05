import React from 'react'
import carlosPic from '../assets/Foto-Carlos-Brito.jpeg'

function AboutMe() {
    return (
        <main className="aboutMe">
            <h1>About Me</h1>
            <p style={{ whiteSpace: "pre-line" }}>
                My name is Carlos Brito, I'm 27 years old and I'm an accountant.

                I live in Mexico City, my hobbies are ice skating, watching movies, going out with friends and always learning new stuff.
                
                The reason I started coding is because I like to create things and in coding I found the best way to do so while having a lot of fun.
            </p>
            <img src={carlosPic} alt="mypicture" />
        </main>
    )
}

export default AboutMe
