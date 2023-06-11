//import HeaderImg from "../image/lion.jpg"
export default function Contacts(props){
    //console.log(props);
    return(
        <div className="image-header">
            <img src={props.img} alt="lion"/>
            <div>
                <h2>{props.name}</h2>
                <h5>{props.role}</h5>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}