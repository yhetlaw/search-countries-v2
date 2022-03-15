import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const SuggestionList = ({ matches }) => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = (value) => {
    router.push('/' + value)
  }

  const renderSuggestions = () => {
    if (!mounted) return null
    console.log(matches)
    if (matches === null) {
      return null
    } else if (matches.length === 0 || matches.length > 15) {
      return null
    } else {
      return (
        <div className='suggestion-list'>
          {matches.map((match) => (
            <div key={match.alpha3Code} className='suggestion-list__item' onClick={() => handleClick(match.name)}>
              {match.name}
              <br />
            </div>
          ))}
        </div>
      )
    }
  }

  return renderSuggestions()
}

export default SuggestionList
