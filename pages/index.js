import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import { GiWorld } from 'react-icons/gi'

export const getStaticProps = async (context) => {
  //const id = context.params.id;
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()

  return {
    props: { country: data },
  }
}

const Home = ({ country }) => {
  const router = useRouter()
  const [clickedCountry, setClickedCountry] = useState(null)
  const [region, setRegion] = useState('')
  const [matches, setMatches] = useState(null)
  const handleClick = (value) => {
    router.push('/' + value)
  }

  const handleFilterClick = (region) => {
    setRegion(region)
  }

  const onChangeHandler = (value) => {
    const newSearch = value.toLowerCase()
    const filteredCountries = country.filter((country) => country.name.toLowerCase().match(newSearch))
    console.log('====================================')
    console.log(filteredCountries.length)
    console.log('====================================')
    if (filteredCountries.length < 15) {
      setMatches(filteredCountries)
    }
    if (value === '') setMatches(null)
  }

  const renderCountries = () => {
    if (!region || region === 'All') {
      return country.map((country) => (
        <CountryCard
          key={country.name}
          title={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
          onClick={(e) => handleClick(country.name)}
        />
      ))
    }

    return country
      .filter((country) => country.region == region)
      .map((country) => (
        <CountryCard
          key={country.name}
          title={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
          onClick={(e) => handleClick(country.name)}
        />
      ))
  }

  console.log(matches)

  return (
    <div className='home'>
      <Head>
        <title>Countries</title>
        <meta name='description' httpEquiv='X-UA-Compatible' content='Search countries' />
        <link rel='icon' href='world.png' />
      </Head>
      <div className='home__container'>
        <SearchBar handleFilterClick={handleFilterClick} onChangeHandler={onChangeHandler} matches={matches} />
        <div className='home__cards'>{renderCountries()}</div>
      </div>
    </div>
  )
}

export default Home
