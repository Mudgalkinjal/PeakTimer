import React from 'react'
type GradientButtonProps = {
  text: string // The button label
  onClick: () => void // The click handler function
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-black rounded-lg shadow-md group"
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-full bg-gray-700 group-hover:translate-x-0"></span>
      <span className="absolute inset-0 w-full h-full border-2 border-black rounded-lg"></span>
      <span className="relative">{text}</span>
    </button>
  )
}

export default GradientButton
