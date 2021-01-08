import Head from 'next/head'

interface TitleProps {
  suffix?: string
}

const Title: React.FC<TitleProps> = ({ suffix = 'Tinofy', children }) => {
  let title = `${children} - ${suffix}`

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  )
}

export default Title
