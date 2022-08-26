import '../styles/Nav.css';

export default function Nav({ setView }) {

    return (
        <div className="py-3 ">
            <button className="bg-transparent border-0 text-offWhite px-2 mx-1" onClick={() => setView('About Me')}>About Me</button>
            <button className="bg-transparent border-0 text-offWhite px-2 mx-1" onClick={() => setView('My Projects')}>My Projects</button>
            <button className="bg-transparent border-0 text-offWhite px-2 mx-1" onClick={() => setView('Contact Me')}>Contact Me</button>
        </div>
    )
}