import "./Card.css"
import Tag from "./Tag"
import Button from "./Button"
function Card({ name, roles, about }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <ul className="card__taglist">
        <Tag tag={roles} />
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  )
}

export default Card
