const projects = [
  {
    name: 'BobaPets',
    status: 'Next up?',
    copy: 'A cozy critter experiment that may be getting a fresh home under the Yippee Cafe umbrella.',
  },
  {
    name: 'Music tools',
    status: 'In the oven',
    copy: 'Tuners, trainers, and little helpers for musicians who like their utilities with a smile.',
  },
  {
    name: 'Games & experiments',
    status: 'Always simmering',
    copy: 'Small, weird, fun things that exist because someone said: “wait, what if…”',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          className="brand-logo"
          src="/images/yippee-cafe-logo.svg"
          alt="Yippee Cafe logo with a cowboy hat, lasso, and coffee cup"
        />
        <div className="badge">fresh domain smell ✨</div>
        <h1>Yippee Cafe</h1>
        <p className="tagline">Playful apps, cooked fresh.</p>
        <p className="lede">
          A tiny internet workshop for games, music tools, BobaPets, and whatever else
          sounds fun. We do not take ourselves too seriously — we cowboy-code experiments,
          cook up strange little delights, and occasionally ship something surprisingly useful.
        </p>
        <div className="actions">
          <a href="https://github.com/YippeeCafe">Visit the GitHub org</a>
          <a href="mailto:hello@yippee.cafe">Say yippee</a>
        </div>
      </section>

      <section className="panel" id="projects">
        <p className="eyebrow">On the menu</p>
        <h2>Games, tools, experiments, and other questionable delights.</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <span>{project.status}</span>
              <h3>{project.name}</h3>
              <p>{project.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
