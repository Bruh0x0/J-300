import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="topbar-logo" href="#home" aria-label="Juicy home">
          <Image src="/juicy-logo.png" alt="Juicy" width={230} height={124} priority />
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a className="rust-link" href="#rust"><i /> Rust</a>
          <a href="#future">Future</a>
          <a href="#about">About</a>
        </nav>
        <a className="discord-link" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
          Discord <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker"><i /> JUICY RUST IS ONLINE</p>
          <h1>MADE TO PLAY.<br /><span>BUILT TO STAY.</span></h1>
          <p className="hero-text">
            Juicy is our place to play. The Rust server is live now, and when
            we&apos;re ready, the same community will move into new games together.
          </p>
          <div className="hero-buttons">
            <a className="primary-button" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
              Get the Rust info <span>↗</span>
            </a>
            <a className="text-button" href="#rust">See the server <span>↓</span></a>
          </div>
          <div className="hero-notes">
            <span>Custom modded</span><b>•</b><span>Online now</span><b>•</b><span>More games later</span>
          </div>
        </div>

        <div className="hero-circle" aria-label="Juicy community logo">
          <div className="circle-halo" />
          <div className="circle-ring circle-ring-one"><span>RUST / LIVE</span></div>
          <div className="circle-ring circle-ring-two" />
          <div className="circle-core">
            <Image src="/juicy-logo.png" alt="Juicy" width={900} height={485} priority />
          </div>
          <div className="circle-tag circle-tag-top"><span>SERVER</span><strong>ONLINE</strong></div>
          <div className="circle-tag circle-tag-bottom"><span>NEXT</span><strong>GTA RP</strong></div>
        </div>
      </section>

      <div className="live-strip" aria-label="Server status">
        <div><i /> RUST ONLINE</div>
        <span>JOIN THROUGH DISCORD</span>
        <span>PLAY-JUICY.COM</span>
        <span>ONE COMMUNITY / MORE WORLDS</span>
      </div>

      <section className="rust-showcase" id="rust">
        <div className="rust-image" aria-hidden="true" />
        <div className="rust-shade" aria-hidden="true" />
        <div className="rust-topline">
          <span>JUICY / CURRENT SERVER</span>
          <p><i /> ONLINE</p>
        </div>
        <div className="rust-content">
          <p className="section-label">PLAYING NOW</p>
          <h2>JUICY<br />RUST</h2>
          <p>
            Our first server is open. It&apos;s custom modded, styled around Juicy,
            and still getting better as people jump in and play.
          </p>
          <a className="light-button" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
            Join the Rust server <span>↗</span>
          </a>
        </div>
        <dl className="rust-facts">
          <div><dt>Status</dt><dd>Online</dd></div>
          <div><dt>Style</dt><dd>Custom modded</dd></div>
          <div><dt>Updates</dt><dd>In Discord</dd></div>
        </dl>
      </section>

      <section className="future-section" id="future">
        <div className="section-intro">
          <p className="section-label">WHAT COMES AFTER RUST?</p>
          <h2>MORE WORLDS.<br /><span>WHEN THEY&apos;RE READY.</span></h2>
          <p>
            We&apos;re starting with one solid server instead of launching five empty
            ones. GTA roleplay is on the list. The game after that is still open.
          </p>
        </div>

        <div className="future-grid">
          <article className="future-card gta-card">
            <div className="future-card-bg" />
            <div className="future-card-shade" />
            <div className="card-top"><span>2 / FUTURE</span><b>PLANNED</b></div>
            <div className="card-copy">
              <h3>GTA RP</h3>
              <p>A proper Juicy roleplay server when the time and platform are right.</p>
            </div>
          </article>

          <article className="future-card next-card">
            <div className="question-mark" aria-hidden="true">?</div>
            <div className="card-top"><span>3 / OPEN</span><b>UNDECIDED</b></div>
            <div className="card-copy">
              <h3>NEXT UP</h3>
              <p>No fake roadmap. The next server gets picked with the community.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-title">
          <p className="section-label">WHY JUICY?</p>
          <h2>NOT A NETWORK.<br /><span>OUR PLACE TO PLAY.</span></h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            We&apos;re not trying to be everywhere at once. Juicy starts with the
            server we actually want to play ourselves.
          </p>
          <p>
            If something is broken, boring, or just doesn&apos;t feel right, tell us.
            We&apos;ll keep shaping Rust with the players who are there—and carry that
            same approach into every future game.
          </p>
          <div className="about-points">
            <span>1. Make it ours</span>
            <span>2. Listen to players</span>
            <span>3. Add games carefully</span>
          </div>
        </div>
      </section>

      <section className="join-section">
        <Image src="/juicy-logo.png" alt="Juicy" width={410} height={220} />
        <p>Rust is online. Come meet everyone.</p>
        <a href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
          discord.gg/juicys <span>↗</span>
        </a>
      </section>

      <footer>
        <span>© 2026 JUICY</span>
        <span>PLAY-JUICY.COM</span>
        <a href="https://discord.gg/juicys" target="_blank" rel="noreferrer">DISCORD ↗</a>
      </footer>
    </main>
  );
}
