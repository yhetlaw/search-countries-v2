import { Card } from 'react-bootstrap'
import Image from 'next/image'

const CountryCard = ({ title, population, region, capital, flag }) => {
  return (
    <Card className='country-card'>
      {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
      <Image src={flag} width={50} height={180} objectFit='cover' />
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
        </Card.Title>
        <Card.Text>
          <b>Population: </b>
          {population}
        </Card.Text>
        <Card.Text>
          <b>Region: </b>
          {region}
        </Card.Text>
        <Card.Text>
          <b>Capital: </b>
          {capital}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CountryCard
