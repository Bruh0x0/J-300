"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type View = "home" | "rust" | "future";

const navigation: { id: View; label: string; note: string }[] = [
  { id: "home", label: "Home", note: "Community" },
  { id: "rust", label: "Rust", note: "Live server" },
  { id: "future", label: "Future", note: "What’s next" },
];

export default function JuicyLanding({ initialView = "home" }: { initialView?: View }) {
  const router = useRouter();
  const [view, setView] = useState<View>(initialView);
  const currentIndex = navigation.findIndex((item) => item.id === view);

  const openView = (nextView: View) => {
    setView(nextView);
    router.push(`/${nextView}`, { scroll: false });
  };

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  useEffect(() => {
    const legacyView = window.location.hash.slice(1) as View;

    if (navigation.some((item) => item.id === legacyView)) {
      setView(legacyView);
      router.replace(`/${legacyView}`, { scroll: false });
    }
  }, [router]);

  return (
    <main className={`site-shell view-${view}`}>
      <div className="site-grain" aria-hidden="true" />

      <header className="site-header">
        <button className="brand" type="button" onClick={() => openView("home")} aria-label="Open the JUICY homepage">
          <Image src="/assets/juicy-logo.png" alt="JUICY" width={220} height={118} priority />
        </button>

        <nav className="view-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id ? "active" : ""}
              onClick={() => openView(item.id)}
              aria-current={view === item.id ? "page" : undefined}
            >
              <span className="nav-copy"><b>{item.label}</b><small>{item.note}</small></span>
            </button>
          ))}
          <a className="nav-discord-link" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
            <span className="nav-discord-mark" aria-hidden="true">
              <Image src="/assets/discord-nav.png" alt="" width={96} height={96} />
            </span>
            <span className="nav-copy"><b>Discord</b><small>Join community</small></span>
          </a>
        </nav>

      </header>

      <div className="mobile-view-label" aria-live="polite">
        {navigation[currentIndex].label}
      </div>

      <section className="view-stage" aria-live="polite">
        {view === "home" && <HomeView onRust={() => openView("rust")} />}
        {view === "rust" && <RustView />}
        {view === "future" && <FutureView />}
      </section>

      <footer className="site-footer">
        <div className="footer-status"><i /> RUST SERVER ONLINE</div>
        <span className="footer-domain">PLAY-JUICY.COM</span>
        <div className="footer-page">{navigation[currentIndex].label.toUpperCase()} / JUICY</div>
      </footer>
    </main>
  );
}

function HomeView({ onRust }: { onRust: () => void }) {
  const worlds = [
    { id: "rust", eyebrow: "LIVE NOW", title: "JUICY RUST", text: "Custom modded survival" },
    { id: "gta", eyebrow: "ON OUR RADAR", title: "GTA ROLEPLAY", text: "A future JUICY world" },
    { id: "next", eyebrow: "COMMUNITY PICK", title: "WHAT’S NEXT?", text: "You help choose it" },
  ];
  const [worldIndex, setWorldIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWorldIndex((current) => (current + 1) % worlds.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [worlds.length]);

  const world = worlds[worldIndex];

  return (
    <div className="screen home-screen community-home">
      <section className="community-copy">
        <p className="eyebrow"><i /> WELCOME TO JUICY</p>
        <h1>WE&apos;RE A<br /><span>GAMING</span><br />COMMUNITY.</h1>
        <p className="lead">
          Meet people, find teammates, hang out and move between games without losing the crew.
          Rust is live today. More worlds arrive when they&apos;re ready.
        </p>
        <div className="actions">
          <a className="button button-primary" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
            Join the community <span>↗</span>
          </a>
          <button className="button button-quiet" type="button" onClick={onRust}>
            Our Rust server <span>→</span>
          </button>
        </div>
      </section>

      <div className="logo-block" aria-label="JUICY gaming community logo">
        <div className="logo-block-layer logo-layer-back" />
        <div className="logo-block-layer logo-layer-mid" />
        <div className="logo-block-face">
          <span className="logo-block-code">JUICY NETWORK</span>
          <span className="logo-block-live"><i /> ACTIVE COMMUNITY</span>
          <span className="logo-scan-line" aria-hidden="true" />
          <Image src="/assets/juicy-logo.png" alt="JUICY" width={900} height={485} priority />
          <div className="logo-block-footer"><b>PLAY-JUICY.COM</b><span>COMMUNITY / 2026</span></div>
        </div>
        <span className="logo-corner logo-corner-one" aria-hidden="true" />
        <span className="logo-corner logo-corner-two" aria-hidden="true" />
      </div>

      <section className="world-slider" aria-label="JUICY game worlds">
        <div key={world.id} className={`world-slide world-slide-${world.id}`}>
          <div className="world-slide-top"><span>{world.eyebrow}</span><b>{worldIndex + 1} / {worlds.length}</b></div>
          <div className="world-slide-copy"><strong>{world.title}</strong><p>{world.text}</p></div>
        </div>
        <div className="world-controls">
          <button type="button" onClick={() => setWorldIndex((worldIndex - 1 + worlds.length) % worlds.length)} aria-label="Previous game">←</button>
          <div>{worlds.map((item, index) => <button key={item.id} type="button" className={index === worldIndex ? "active" : ""} onClick={() => setWorldIndex(index)} aria-label={`Show ${item.title}`} />)}</div>
          <button type="button" onClick={() => setWorldIndex((worldIndex + 1) % worlds.length)} aria-label="Next game">→</button>
        </div>
      </section>
    </div>
  );
}

function RustView() {
  const [copied, setCopied] = useState(false);
  const serverAddress = "51.77.65.104:28015";
  const steamLaunchUrl = `steam://run/252490//+connect%20${serverAddress}/`;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`client.connect ${serverAddress}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="screen rust-v2">
      <section className="rust-v2-briefing">
        <p className="rust-v2-kicker"><i /> JUICY RUST / EU</p>
        <h1>BUILD.<br /><span>RAID.</span><br />REPEAT.</h1>
        <p className="rust-v2-lead">
          Fast progression, custom plugins and weekly wipes—built for players who want action without the grind.
        </p>

        <div className="rust-v2-features" aria-label="Server features">
          <span><b>10X</b><small>LOOT</small></span>
          <span><b>6</b><small>MAX TEAM</small></span>
          <span><b>0</b><small>BLUEPRINTS</small></span>
          <span><b>FRI</b><small>WIPES</small></span>
        </div>

        <div className="rust-v2-actions">
          <a className="rust-v2-primary" href={steamLaunchUrl}>Play now <span>↗</span></a>
          <a href="https://rust-servers.net/server/178264/" target="_blank" rel="noreferrer">Server page <span>↗</span></a>
        </div>
      </section>

      <section className="rust-v2-stage" aria-label="JUICY Rust server">
        <div className="rust-v2-art">
          <div className="rust-v2-status">
            <span><i /> SERVER ACTIVE</span>
            <b>EU / MODDED / WEEKLY</b>
          </div>

          <div className="rust-v2-poster-copy">
            <small>JUICY RUST</small>
            <strong>NO BP.<br />NO WAITING.</strong>
          </div>

          <div className="rust-v2-ticker">10X LOOT <i /> 6-MAN TEAMS <i /> FRIDAY WIPES <i /> CUSTOM PLUGINS</div>
        </div>

        <aside className="rust-v2-connect">
          <div className="rust-v2-address">
            <small>DIRECT CONNECT</small>
            <strong>{serverAddress}</strong>
          </div>
          <code>client.connect {serverAddress}</code>
          <button type="button" onClick={copyAddress}>{copied ? "COPIED" : "COPY COMMAND"}</button>
          <a href={steamLaunchUrl}>CONNECT <span>↗</span></a>
        </aside>
      </section>
    </div>
  );
}

function FutureView() {
  return (
    <div className="screen future-v2">
      <article className="future-v2-gta">
        <div className="future-v2-gta-top">
          <span><i /> FRONT OF THE ROADMAP</span>
          <b>GTA RP / CONCEPT</b>
        </div>

        <div className="future-v2-gta-copy">
          <small>JUICY PRESENTS</small>
          <h1>GTA<br />ROLEPLAY</h1>
          <p>A future city shaped around the same community.</p>
        </div>

        <div className="future-v2-gta-footer">
          <span>THE NEXT JUICY WORLD</span>
          <a href="https://discord.gg/juicys" target="_blank" rel="noreferrer">FOLLOW THE PROJECT <b>↗</b></a>
        </div>
      </article>

      <aside className="future-v2-roadmap">
        <p className="future-v2-kicker">THE ROAD AHEAD</p>
        <h2>ONE WORLD.<br /><span>AT A TIME.</span></h2>
        <p className="future-v2-lead">Rust is live. GTA Roleplay stands at the front of what comes next.</p>

        <div className="future-v2-timeline" aria-label="JUICY world roadmap">
          <div className="is-live"><b>LIVE</b><span>RUST<small>PLAYABLE NOW</small></span></div>
          <div className="is-next"><b>NEXT</b><span>GTA 6 ROLEPLAY<small>FRONT OF THE ROADMAP</small></span></div>
          <div><b>LATER</b><span>MORE WORLDS<small>WHEN THEY’RE READY</small></span></div>
        </div>

        <a className="future-v2-discord" href="https://discord.gg/juicys" target="_blank" rel="noreferrer">
          Join the conversation <span>↗</span>
        </a>
      </aside>
    </div>
  );
}
