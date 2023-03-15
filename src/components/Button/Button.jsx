export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="py-1 px-2 bg-slate-100 border border-slate-500 rounded cursor-pointer hover:bg-white">Try Out</button>
  )
}
