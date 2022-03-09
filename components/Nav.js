import { Navbar, Container, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsMoon } from 'react-icons/bs'

const Nav = () => {
  return (
    <Navbar className='navbar'>
      <Container className='navbar__first-container'>
        <Link href='/'>
          <Navbar.Brand className='navbar__brand'> Where in the world?</Navbar.Brand>
        </Link>

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
