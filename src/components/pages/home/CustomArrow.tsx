import { ArrowLeft, ArrowRight } from "lucide-react"

interface ArrowProps {
  onClick?: () => void
}

export const CustomNextArrow = ({ onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute -top-18 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer border border-white transition-all duration-300 hover:bg-white hover:text-black"
  >
    <ArrowRight className="w-5 h-5" />
  </div>
)

export const CustomPrevArrow = ({ onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute -top-18 right-16 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer border border-white transition-all duration-300 hover:bg-white hover:text-black"
  >
    <ArrowLeft className="w-5 h-5" />
  </div>
)
