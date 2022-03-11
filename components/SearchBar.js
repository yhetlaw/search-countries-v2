import { Navbar, Container, Form, FormControl, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchBar = () => {
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
      <Container className='search-bar__second-container'>
        <DropdownButton
          variant=''
          id='dropdown-basic-button'
          title='Filter by region...'
          className='search-bar__filter'>
          <Dropdown.Item className='search-bar__item'>Africa</Dropdown.Item>
          <Dropdown.Item className='search-bar__item'>America</Dropdown.Item>
          <Dropdown.Item className='search-bar__item'>Asia</Dropdown.Item>
          <Dropdown.Item className='search-bar__item'>Europe</Dropdown.Item>
          <Dropdown.Item className='search-bar__item'>Oceania</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  )
}

export default SearchBar
