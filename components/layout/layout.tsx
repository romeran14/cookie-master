import {  FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {
  prop?:string
}

export const Layout:FC<PropsWithChildren<Props>>= ({children, prop}) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
           <Navbar/>
      </nav>
      <main style={{ padding:'20px 20px' }} >
        {children}
      </main>
    </>
  )
}