import { Title } from '@components/common'
import { Container } from '@components/ui'

export default function Home() {
  return (
    <>
      <Title>Home</Title>
      <Container className="h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl font-display font-medium md:text-5xl md:font-bold">
            Find all the events and places you are looking.
          </h1>
          <p className="text-gray-300 text-lg font-normal md:text-2xl leading-9 mt-4 md:mt-8">
            <span className="underline font-bold">tinofy</span> helps you find all the places to
            visit and upcoming events with all the information you need.
          </p>
          <button className="bg-blue-300 md:text-lg font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg mt-4 md:mt-8">
            Let's Get Started
          </button>
        </div>
      </Container>
    </>
  )
}
