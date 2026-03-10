interface CardProps {
  venueName: string
  imgSrc: string
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="w-64 rounded-lg shadow-lg bg-white">

      <img
        src={imgSrc}
        alt={venueName}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 text-center font-bold">
        {venueName}
      </div>

    </div>
  )
}
