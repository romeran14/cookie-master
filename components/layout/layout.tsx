import { FC } from 'react';
import Head from 'next/head';
import { Main } from 'next/document';

interface Props {
  prop:string
}

export const layout:FC<Props>= ({prop}) => {
  return (
    <div>{prop}</div>
  )
}