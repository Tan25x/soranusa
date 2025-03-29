"use client"
import { Info, Play, Star, Calendar } from "lucide-react"
import ContentRow from "@/components/content-row"
import Header from "@/components/header"
import { useState, useEffect } from "react"

// Sample featured anime data
const featuredAnime = [
  {
    id: 1,
    title: "Solo Leveling",
    image: "/placeholder.svg?height=1080&width=1920&text=Solo+Leveling",
    year: "2024",
    rating: "8.6",
    votes: "947",
    description:
      "They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a...",
  },
  {
    id: 2,
    title: "Demon Slayer",
    image: "/placeholder.svg?height=1080&width=1920&text=Demon+Slayer",
    year: "2023",
    rating: "9.2",
    votes: "1243",
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself...",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    image: "/placeholder.svg?height=1080&width=1920&text=Jujutsu+Kaisen",
    year: "2023",
    rating: "8.9",
    votes: "1089",
    description:
      "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul...",
  },
  {
    id: 4,
    title: "Attack on Titan",
    image: "/placeholder.svg?height=1080&width=1920&text=Attack+on+Titan",
    year: "2022",
    rating: "9.5",
    votes: "2156",
    description:
      "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for pleasure rather than as a food source...",
  },
  {
    id: 5,
    title: "One Piece",
    image: "/placeholder.svg?height=1080&width=1920&text=One+Piece",
    year: "2024",
    rating: "9.3",
    votes: "3254",
    description:
      "Gol D. Roger was known as the 'Pirate King,' the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world...",
  },
]

export default function Home() {
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-cycle through featured anime
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentAnimeIndex((prevIndex) => (prevIndex + 1) % featuredAnime.length)
        setIsTransitioning(false)
      }, 500) // Wait for fade out before changing content
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const currentAnime = featuredAnime[currentAnimeIndex]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Disclaimer Banner */}
      <div className="bg-[#111] text-gray-400 text-xs text-center py-1.5 px-4">
        This site does not store any files on the server, we only linked to the media which is hosted on 3rd party
        services.
      </div>

      <Header />

      <main>
        {/* Hero Section with Animation - smaller height */}
        <section className="relative h-[60vh] w-full">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            style={{
              backgroundImage: `url(${currentAnime.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Content - positioned with padding-top to account for header */}
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-end pb-12 px-4 md:px-6 pt-32">
            <div
              className={`transition-all duration-500 ${isTransitioning ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center bg-black/50 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{currentAnime.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({currentAnime.votes})</span>
                </div>

                <div className="flex items-center bg-black/50 rounded-full px-3 py-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentAnime.year}</span>
                </div>

                <div className="w-6 h-6 flex items-center justify-center bg-black/50 rounded-full">
                  <span className="text-xs">HD</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-3">{currentAnime.title}</h1>

              <p className="text-gray-300 max-w-2xl mb-6 text-sm md:text-base line-clamp-3">
                {currentAnime.description}
              </p>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-200 transition text-sm">
                  <Play className="w-4 h-4" /> Watch Now
                </button>
                <button className="flex items-center gap-2 bg-black/50 border border-gray-600 px-5 py-2.5 rounded-full font-medium hover:bg-black/70 transition text-sm">
                  <Info className="w-4 h-4" /> More Info
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Rows */}
        <div className="container mx-auto px-4 md:px-6 space-y-10 pb-8">
          <ContentRow title="Trending Now" />
          <ContentRow title="Popular Anime" />
          <ContentRow title="New Releases" />
        </div>
      </main>
    </div>
  )
}

