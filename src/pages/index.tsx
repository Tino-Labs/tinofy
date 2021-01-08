import { Title } from '@components/common'
import { Container } from '@components/ui'

export default function Home() {
  return (
    <>
      <Title>Home</Title>
      <Container className="h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl">
          <h1 className="text-white text-4xl md:text-6xl font-display font-extrabold">
            If you are good at something never do it for free
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-9 font-medium mt-4 md:mt-8">
            What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea.
            <span className="font-bold"> Resilient</span>... highly contagious. Once an idea has
            taken hold of the brain it's almost impossible to eradicate. An idea that is fully
            formed--fully understood--that sticks.
          </p>
          <button className="bg-blue-300 font-bold px-4 py-2 rounded-lg mt-4 md:mt-8">
            Let's Get Started
          </button>
        </div>
      </Container>
    </>
  )
}
