import { useEffect, useState } from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { Cart } from "./cart"

export function App() {
  const [inputValue, setInputValue] = useState('')
  const [dataValue, setDataValue] = useState({})

  function handleChange(event) {
    setInputValue(inputValue => inputValue = event.target.value);
  }

  async function handleSubmit(){
    try{
      let request = await fetch(`https://api.api-ninjas.com/v1/weather?city=${inputValue}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'FZBlftvKwEfP23sm5OECGA==gMbfPMd1I81SeLXQ',
        },
      })

      let response = await request.json();
      setDataValue(dataValue => dataValue = response)
      console.log(dataValue)
    }catch(error){
      console.log(error)
    }
  } 

  useEffect(() => {
    handleSubmit();

    return
  }, [])

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <Row>
        <Col className="m-5">
          <Form className="d-flex flex-column fs-5">
            <Form.Group>
              <Form.Label className="mb-4">
                Wpisz nazwe swojego miasta
              </Form.Label>
              <Form.Control type="text" placeholder="Miasto.." value={inputValue} onChange={handleChange}/>
              <Form.Text className="mb-4">Sprawdź pogode już teraz!</Form.Text>
            </Form.Group>
            <Button variant="primary" className="mt-4" onClick={handleSubmit}>Sprawdź</Button>
          </Form>
        </Col>
        <Col className="m-5">
          <Cart items={{...dataValue}} name={inputValue}/>
        </Col>
      </Row>
    </Container>
  )
}