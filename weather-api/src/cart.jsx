import { Card } from "react-bootstrap"

export function Cart({items , name}) { 
    return (
        <>
            <Card>
                <Card.Body style={{width: "50vw"}} className="d-flex jusfy-content-around align-items-center flex-row">
                    <div style={{width: "35vw"}}>
                        <Card.Title className="c-black">{name}</Card.Title>
                        <div className="text-muted" >
                            <Card.Text>Temperatura w ciągu dnia: {items.max_temp} / {items.min_temp}°C</Card.Text>
                            <Card.Text>Odczuwalna Temperatura: {items.feels_like}</Card.Text>
                            <Card.Text>Wilgotność: {items.humidity}%</Card.Text>
                            <Card.Text>Zachmurzenie: {items.cloud_pct}%</Card.Text>
                        </div>
                    </div>
                    <div style={{width: "15vw"}}>
                        <Card.Title className="m-3" style={{fontSize: "5rem"}}>{items.temp}°C</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}