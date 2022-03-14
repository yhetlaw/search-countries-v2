import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'

export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()

  const paths = data.map((country) => {
    return {
      params: { id: country.name.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://restcountries.com/v2/name/' + id)
  const data = await res.json()

  return {
    props: { country: data },
  }
}

const Details = ({ country }) => {
  const router = useRouter()
  const backHandler = () => {
    router.push('/')
  }

  let borders = country[0].translations
  let border = Object.entries(borders)

  let mappedLanguages = []
  let languages = country[0].languages

  for (let obj in languages) {
    mappedLanguages.push(languages[obj].name)
  }

  console.log(mappedLanguages)
  return (
    <div className='details'>
      <div className='details__container'>
        <div className='details__button-bar'>
          <Button variant='secondary' className='details__back-button' onClick={backHandler}>
            back
          </Button>{' '}
        </div>
        <div className='details__info'>
          <div className='details__flag'>
            <Image src={country[0].flag} layout='fill' objectFit='cover' />
          </div>
          <div className='details__country-info'>
            <div className='details__country-info-container'>
              <div className='details__title'>
                <h1>{country[0].name}</h1>
              </div>
              <div className='details__general'>
                <div className='details__general1'>
                  <p>
                    <b>Native name: </b>
                    {country[0].nativeName}
                  </p>
                  <p>
                    <b>Population: </b>
                    {country[0].population}
                  </p>
                  <p>
                    <b>Region: </b>
                    {country[0].region}
                  </p>
                  <p>
                    <b>Sub region: </b>
                    {country[0].subRegion}
                  </p>
                  <p>
                    <b>Region: </b>
                    {country[0].region}
                  </p>
                  <p>
                    <b>Capital: </b>
                    {country[0].capital}
                  </p>
                </div>
                <div className='details__general2'>
                  <p>
                    <b>Top level domain: </b>
                    {country[0].topLevelDomain}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {/* {country[0].currencies} */}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {mappedLanguages.join(', ')}
                  </p>
                </div>
              </div>
              <p>
                <b>Border countries: </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
