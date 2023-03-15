export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="py-1 px-2 border border-slate-500 rounded cursor-pointer">Try Out</button>
  )
}
