import "./Tag.css"

export default function Tag({ tag }) {
  return tag.map((role, index) => {
    return (
      <li key={index} className="tag">
        {role}
      </li>
    )
  })
}
