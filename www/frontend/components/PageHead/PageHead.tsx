import Head from 'next/head'
import { FC } from "react";

interface Props {
  title: string;
}

export const PageHead :FC<Props> = ( { title } ) => {
  return (
    <Head>
      <title>{title} ごっちでぶ</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content="ごっちでぶ" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@0xg0tti" />
    </Head>
  )
}
