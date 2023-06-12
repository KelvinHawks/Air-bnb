//import HeaderImg from "../image/lion.jpg"
export default function Contacts(props){
    
    console.log(typeof props.uploads);
    return(
        <div className="image-header">
            <img src={props.img} alt="lion"/>
            <div>
                <h2>{props.name}</h2>
                <h5>{props.role}</h5>
                <p>{props.paragraph}</p>
                <p>{props.uploads}</p>
            </div>
        </div>
    )
    
}
