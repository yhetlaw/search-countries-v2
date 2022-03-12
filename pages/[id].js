import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'

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

  console.log(country)
  return (
    <div className='details'>
      <div className='details__container'>
        <Button variant='secondary' className='details__back-button' onClick={backHandler}>
          back
        </Button>{' '}
      </div>
    </div>
  )
}

export default Details
