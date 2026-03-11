import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {
  return (
    <main>

      <Banner />

      <div className="text-blue-500 flex gap-6 p-6 justify-center">

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
      <div className="bg-red-500 text-green-500 text-center p-10 text-4xl">
        มีการติดตั้งและใช้งาน Tailwind CSS จริงๆนะ ตรงนี้ก็ใช้นะครับ
      </div>

    </main>
  )
}