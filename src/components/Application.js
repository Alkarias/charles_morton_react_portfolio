export default function Application({ image, alt, github, deployed, name, caption }) {
    console.log(image);
    return (
        <figure className="col h-25 mx-1">
            <a href={deployed}>
                <img src={image} alt={alt}/>
            </a>
            <figcaption><b>{name}</b><br/>{caption}</figcaption>
        </figure>    
    )
}