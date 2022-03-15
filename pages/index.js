import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import { useState } from 'react'

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

  const handleClick = (value) => {
    router.push('/' + value)
  }

  const handleFilterClick = (region) => {
    setRegion(region)
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

  return (
    <div className='home'>
      <div className='home__container'>
        <SearchBar handleFilterClick={handleFilterClick} />
        <div className='home__cards'>{renderCountries()}</div>
      </div>
    </div>
  )
}

export default Home
