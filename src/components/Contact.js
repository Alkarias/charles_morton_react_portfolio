export default function Contact() {
    return (
        <form className="container">
            <h4 className="mt-3">Name:</h4>
            <input id="name" className="w-75"></input>
            <h4>Email:</h4>
            <input id="email" className="w-75"></input>
            <h4>Description</h4>
            <textarea id="description" className="w-75"></textarea>
            <br/>
            <button id="send" className="btn btn-primary send mt-3">Send</button>
        </form>
    )
}