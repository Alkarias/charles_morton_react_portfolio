import '../styles/Nav.css';

export default function Nav({ setView }) {
    return (
        <div className="pt-2">
            <button id="About Me" className="rounded-top border-0 mx-1 px-2 pb-3 pt-1" onClick={() => setView('About Me')}>About Me</button>
            <button id="My Projects" className="rounded-top border-0 mx-1 px-2 pb-3 pt-1" onClick={() => setView('My Projects')}>My Projects</button>
            <button id="Contact Me" className="rounded-top border-0 mx-1 px-2 pb-3 pt-1" onClick={() => setView('Contact Me')}>Contact Me</button>
        </div>
    )
}