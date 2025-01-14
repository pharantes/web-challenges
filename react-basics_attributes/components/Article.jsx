export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello React</h2>
      <label htmlFor="input"></label>
      <input id="input"></input>
      <a className="article__link" href="https://react.dev/">
        Go research
      </a>
    </article>
  );
}
