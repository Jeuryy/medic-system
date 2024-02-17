import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './MyCard.css'
export default function MyCard(props){
    return (
        <Card
            key="light"
            text= "dark"
            style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                <Link className="card-link" to={props.link}>Ver mas </Link>
            </Card.Body>
        </Card>
    )
}