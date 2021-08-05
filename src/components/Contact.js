import React from 'react'

function Contact() {
    const submitContact = (e) => {
        e.preventDefault();
    }

    return (
        <main className="contact">
            <h1>Contact</h1>
            <form onSubmit={submitContact}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Contact
