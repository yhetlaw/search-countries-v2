import { Navbar, Container, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsMoon } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  console.log(theme)
  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme
    console.log(currentTheme)
    if (currentTheme === 'dark') {
      return (
        <Button variant='' className='navbar__darkmode' onClick={() => setTheme('light')}>
          Light mode
        </Button>
      )
    } else {
      return (
        <Button variant='' className='navbar__darkmode' onClick={() => setTheme('dark')}>
          Dark mode
        </Button>
      )
    }
  }
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
        {renderThemeChanger()}
      </Container>
    </Navbar>
  )
}

export default Nav
