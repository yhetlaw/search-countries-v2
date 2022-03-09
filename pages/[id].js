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
  console.log(country)
  return (
    <div>
      <h1>{country[0].name}</h1>
      <p>{country[0].population}</p>
    </div>
  )
}

export default Details
