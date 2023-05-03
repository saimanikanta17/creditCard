import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  Card,
  InputDetails,
  Heading,
  Para,
  PaymentContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, numberFunction] = useState('')

  const [name, nameFunction] = useState('')

  const onChangeNumber = event => {
    numberFunction(event.target.value)
  }

  const onChangeName = event => {
    nameFunction(event.target.value.toUpperCase())
  }

  return (
    <BgContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <Para>{cardNumber}</Para>
          <Para>CARDHOLDER NAME</Para>
          <Para>{name}</Para>
        </Card>
      </CardContainer>
      <PaymentContainer>
        <InputDetails>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={cardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={name}
          />
        </InputDetails>
      </PaymentContainer>
    </BgContainer>
  )
}

export default CreditCard
