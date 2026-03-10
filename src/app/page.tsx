import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {
  return (
    <main>

      <Banner />

      <div className="flex gap-6 p-6 justify-center">

        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
        />

        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
        />

        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
        />

      </div>

    </main>
  )
}