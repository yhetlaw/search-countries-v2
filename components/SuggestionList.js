import { useState, useEffect } from 'react'

const SuggestionList = ({ matches }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderSuggestions = () => {
    if (!mounted) return null
    console.log(matches)
    if (matches === null) {
      return null
    } else {
      return (
        <div className='suggestion-list'>
          {matches.map((match) => (
            <div key={match.alpha3Code} className='suggestion-list__item'>
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
