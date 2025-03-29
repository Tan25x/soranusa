import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ContentRowProps {
  title: string
}

export default function ContentRow({ title }: ContentRowProps) {
  // Mock data for anime content
  const animeItems = [
    { id: 1, title: "Solo Leveling", image: "/placeholder.svg?height=300&width=200&text=Solo+Leveling" },
    { id: 2, title: "Demon Slayer", image: "/placeholder.svg?height=300&width=200&text=Demon+Slayer" },
    { id: 3, title: "Jujutsu Kaisen", image: "/placeholder.svg?height=300&width=200&text=Jujutsu+Kaisen" },
    { id: 4, title: "Attack on Titan", image: "/placeholder.svg?height=300&width=200&text=Attack+on+Titan" },
    { id: 5, title: "One Piece", image: "/placeholder.svg?height=300&width=200&text=One+Piece" },
    { id: 6, title: "My Hero Academia", image: "/placeholder.svg?height=300&width=200&text=My+Hero+Academia" },
    { id: 7, title: "Chainsaw Man", image: "/placeholder.svg?height=300&width=200&text=Chainsaw+Man" },
    { id: 8, title: "Spy x Family", image: "/placeholder.svg?height=300&width=200&text=Spy+x+Family" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <button className="p-1 rounded-full hover:bg-gray-800">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {animeItems.map((item) => (
          <div key={item.id} className="relative group">
            <div className="aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={200}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium truncate">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

