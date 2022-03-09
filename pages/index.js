import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'

export const getStaticProps = async (context) => {
  //const id = context.params.id;
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()

  return {
    props: { country: data },
  }
}

const Home = ({ country }) => {
  return (
    <div className='home'>
      <div className='home__container'>
        <SearchBar />
        <div className='home__cards'>
          {country.map((country) => (
            <CountryCard
              key={country.name}
              title={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
