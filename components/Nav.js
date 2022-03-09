import { Navbar, Container, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsMoon } from 'react-icons/bs'

const Nav = () => {
  return (
    <Navbar className='navbar'>
      <Container className='navbar__first-container'>
        <Navbar.Brand href='#home'>Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
      <Container className='navbar__second-container'>
        <BsMoon />
        <Button variant='' className='navbar__dark'>
          Dark mode
        </Button>{' '}
      </Container>
    </Navbar>
  )
}

export default Nav
