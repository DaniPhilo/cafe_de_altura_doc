export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="py-2 px-4 bg-blue-200 text-blue-800 rounded">Try Out</button>
  )
}
