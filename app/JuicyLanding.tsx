"use client";

import Image from "next/image";
import { useState } from "react";

type View = "home" | "rust" | "future";

const navigation: { id: View; label: string; number: string }[] = [
  { id: "home", label: "Home", number: "1" },
  { id: "rust", label: "Rust", number: "2" },
  { id: "future", label: "What’s next", number: "3" },
];

export default function JuicyLanding() {
  const [view, setView] = useState<View>("home");
  const currentIndex = navigation.findIndex((item) => item.id === view);

  return (
    <main className={`site-shell view-${view}`}>
      <div className="site-grain" aria-hidden="true" />

      <header className="site-header">
        <button className="brand" type="button" onClick={() => setView("home")} aria-label="Open the JUICY homepage">
          <Image src="/assets/juicy-logo.png" alt="JUICY" width={220} height={118} priority />
        </button>

        <nav className="view-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id ? "active" : ""}
              onClick={() => setView(item.id)}
              aria-current={view === item.id ? "page" : undefined}
            >
              <span>{item.number}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <a className="header-discord" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
          Join Discord <span>↗</span>
        </a>
      </header>

      <div className="mobile-view-label" aria-live="polite">
        {navigation[currentIndex].number} / {navigation[currentIndex].label}
      </div>

      <section className="view-stage" aria-live="polite">
        {view === "home" && <HomeView onRust={() => setView("rust")} />}
        {view === "rust" && <RustView />}
        {view === "future" && <FutureView />}
      </section>

      <footer className="site-footer">
        <div className="footer-status"><i /> RUST SERVER ONLINE</div>
        <span className="footer-domain">PLAY-JUICY.COM</span>
        <div className="footer-page">0{currentIndex + 1} / 03</div>
      </footer>
    </main>
  );
}

function HomeView({ onRust }: { onRust: () => void }) {
  return (
    <div className="screen home-screen">
      <div className="home-copy">
        <p className="eyebrow"><i /> JUICY RUST IS LIVE</p>
        <h1>ONE CREW.<br /><span>MORE THAN ONE GAME.</span></h1>
        <p className="lead">
          JUICY is a gaming community built around the people in it. Rust is live now;
          whatever comes next gets built with the same crew.
        </p>
        <div className="actions">
          <a className="button button-primary" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
            Enter the Discord <span>↗</span>
          </a>
          <button className="button button-quiet" type="button" onClick={onRust}>
            View Rust server <span>→</span>
          </button>
        </div>
      </div>

      <div className="logo-scene" aria-label="JUICY gaming community">
        <div className="logo-disc" />
        <div className="logo-track track-one"><span>LIVE</span></div>
        <div className="logo-track track-two" />
        <Image src="/assets/juicy-logo.png" alt="JUICY" width={900} height={485} priority />
        <div className="logo-note note-one"><b>10X</b><span>RUST</span></div>
        <div className="logo-note note-two"><b>EU</b><span>ONLINE</span></div>
      </div>

      <div className="home-signoff">NO PAY-TO-WIN. NO FAKE ROADMAP.</div>
    </div>
  );
}

function RustView() {
  return (
    <div className="screen rust-screen">
      <div className="rust-copy">
        <p className="eyebrow"><i /> SERVER ONLINE</p>
        <h1>JUICY<br /><span>RUST</span></h1>
        <p className="lead">Fast progression, custom plugins and room to play without a shop selling the win.</p>

        <div className="rust-tags" aria-label="Server features">
          <span>10X LOOT</span>
          <span>6-MAN</span>
          <span>NO BP</span>
          <span>FRIDAY WIPES</span>
        </div>
      </div>

      <aside className="connect-card">
        <div className="connect-card-top">
          <span>DIRECT CONNECT</span>
          <b><i /> LIVE</b>
        </div>
        <strong>51.77.65.104:28015</strong>
        <p>Open Rust, press F1 and paste:</p>
        <code>client.connect 51.77.65.104:28015</code>
        <div className="connect-actions">
          <a href="steam://connect/51.77.65.104:28015">Connect now <span>↗</span></a>
          <a href="https://rust-servers.net/server/178264/" target="_blank" rel="noreferrer">Server page <span>↗</span></a>
        </div>
        <small>Server news, wipe times and support are all in Discord.</small>
      </aside>
    </div>
  );
}

function FutureView() {
  return (
    <div className="screen future-screen">
      <div className="future-copy">
        <p className="eyebrow">AFTER RUST</p>
        <h1>MORE WORLDS.<br /><span>WHEN THEY’RE READY.</span></h1>
        <p className="lead">
          GTA roleplay is on the list. The game after that is up to the community.
          We would rather build one good server than five empty ones.
        </p>
        <a className="button button-primary" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
          Be there for the vote <span>↗</span>
        </a>
      </div>

      <div className="future-cards">
        <article className="future-card gta-future-card">
          <span>IN THE FUTURE</span>
          <div><b>GTA</b><strong>ROLEPLAY</strong></div>
        </article>
        <article className="future-card open-future-card">
          <span>COMMUNITY PICK</span>
          <div><b>?</b><strong>WHAT’S NEXT</strong></div>
        </article>
      </div>
    </div>
  );
}
