import { Navbar, Container, Form, FormControl, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const SearchBar = ({ handleFilterClick }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderFilter = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <DropdownButton
          id='dropdown-basic-button'
          title='Filter by region...'
          className='search-bar__filter'
          menuVariant='dark'>
          <Dropdown.Item onClick={() => handleFilterClick('Africa')}>Africa</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Americas')}>Americas</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Asia')}>Asia</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Europe')}>Europe</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Oceania')}>Oceania</Dropdown.Item>
        </DropdownButton>
      )
    } else {
      return (
        <DropdownButton
          variant=''
          id='dropdown-basic-button'
          title='Filter by region...'
          className='search-bar__filter'>
          <Dropdown.Item onClick={() => handleFilterClick('Africa')}>Africa</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Americas')}>Americas</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Asia')}>Asia</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Europe')}>Europe</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterClick('Oceania')}>Oceania</Dropdown.Item>
        </DropdownButton>
      )
    }
  }

  return (
    <Navbar bg='light' expand='lg' className='search-bar'>
      <Container className='search-bar__first-container'>
        <Form className='d-flex search-bar__form'>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='basic-addon1' className='search-bar__icon'>
              <AiOutlineSearch />
            </InputGroup.Text>
            <FormControl
              type='search'
              placeholder='Search for a country...'
              aria-label='Username'
              aria-describedby='basic-addon1'
              className='search-bar__input'
            />
          </InputGroup>
        </Form>
      </Container>
      <Container className='search-bar__second-container'>{renderFilter()}</Container>
    </Navbar>
  )
}

export default SearchBar
