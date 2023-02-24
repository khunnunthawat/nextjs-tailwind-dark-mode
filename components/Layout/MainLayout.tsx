import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { FC } from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Tailwind Theme</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="flex h-screen flex-col bg-slate-100 dark:bg-black">
        <Header />
        <main className="mx-auto flex flex-grow flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
