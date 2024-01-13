import { Spinner, Card } from "react-bootstrap"

export function Cart({items , name}) {
    return (
        <>
            {items.error != null ? 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : 
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Odczuwalna Temperatura {items.feels_like}</Card.Text>
                </Card.Body>
            </Card>}
        </>
    )
}