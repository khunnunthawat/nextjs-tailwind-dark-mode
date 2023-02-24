import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import Link from 'next/link'

import Button from '../Button'
import { Moon, Sun } from '../Icons'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <Button className="hover:bg-white hover:text-black" onClick={() => setTheme('light')}>
          <Moon className="h-4 w-4" />
        </Button>
      )
    } else {
      return (
        <Button
          className="bg-gray-200 hover:bg-black hover:text-white"
          onClick={() => setTheme('dark')}
        >
          <Sun className="h-4 w-4" />
        </Button>
      )
    }
  }

  return (
    <header className="flex h-12 items-center justify-between px-6">
      <ul className="flex gap-4 text-sm">
        <Link href="/" className="font-semibold text-gray-400 hover:text-gray-500">
          Home
        </Link>{' '}
        <Link href="/about" className="font-semibold text-gray-400 hover:text-gray-500">
          About
        </Link>
      </ul>
      {renderThemeChanger()}
    </header>
  )
}

export default Header
