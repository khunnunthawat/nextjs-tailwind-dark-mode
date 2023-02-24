import Link from 'next/link'

const Footer = () => {
  const url = 'https://github.com/khunnunthawat/nextjs-tailwind-dark-mode'

  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <span className="font-bold text-gray-500 dark:text-gray-100">
        <span className="dark:text-white">
          <Link href={url}>Tailwind Dark Mode</Link>
        </span>
        <span className="ml-2 font-normal">
          &copy; {new Date().getFullYear()} All Rights Reversed
        </span>
      </span>
    </footer>
  )
}

export default Footer
