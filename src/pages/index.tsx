import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tinoly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <h1 className="text-lg font-bold text-gray-900 uppercase">Tinoly Starter</h1>
      </main>
    </div>
  )
}
