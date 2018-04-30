export const styledComponentsLink = `
const Link = styled.a\`
  display: inline-block;
  line-height: 2;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: papayawhip;
  color: #061329;
  font-weight: bold;

  \${props =>
    props.inverted &&
    css\`
      background-color: #061329;
      color: papayawhip;
    \`};
\`;

render(
  <div>
    <Link>Documentation</Link>
    <Link inverted>GitHub</Link>
  </div>
)`;
