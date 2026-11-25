import React, { useState } from 'react';
import { ArrowUpRight, Plus, RotateCcw, Sparkles, Type } from 'lucide-react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="/" className="brand" aria-label="Petit Lab — accueil"><span className="brand-icon"><Sparkles size={19} /></span>petit lab<span className="brand-dot">.</span></a>
        <span className="test-tag"><span /> Espace de test</span>
      </header>
      <main>
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">SIMPLE. INSTANTANÉ. INTERACTIF.</p>
          <h1 id="page-title">Les petites idées<br />commencent <span>ici.</span></h1>
          <p className="intro-copy">Un clic, quelques mots, et le tour est joué.<br />Un petit espace pour tester, tout simplement.</p>
        </section>
        <div className="experiments">
          <section className="panel counter-panel" aria-labelledby="counter-title">
            <div className="panel-heading"><span className="number-label">01 / INTERAGIR</span><span className="small-icon"><Plus size={18} /></span></div>
            <h2 id="counter-title">À vous de cliquer.</h2>
            <p className="panel-description">Chaque clic compte. Littéralement.</p>
            <div className="counter-value" aria-live="polite" aria-atomic="true">{count}<span>{count === 1 ? 'clic' : 'clics'}</span></div>
            <button className="increment" onClick={() => setCount(value => value + 1)}><Plus size={19} /> Ajouter un clic <ArrowUpRight size={18} className="button-arrow" /></button>
            <button className="reset" onClick={() => setCount(0)} disabled={count === 0}><RotateCcw size={14} /> Remettre à zéro</button>
          </section>
          <section className="panel text-panel" aria-labelledby="text-title">
            <div className="panel-heading"><span className="number-label">02 / S’EXPRIMER</span><span className="small-icon"><Type size={18} /></span></div>
            <h2 id="text-title">Vos mots, en direct.</h2>
            <p className="panel-description">Écrivez quelque chose et voyez-le apparaître.</p>
            <label htmlFor="live-text" className="field-label">Votre texte</label>
            <textarea id="live-text" value={text} onChange={event => setText(event.target.value)} placeholder="Et si on commençait par bonjour ?" rows={3} />
            <div className="text-meta"><span>Aucune sauvegarde, juste l’instant présent.</span><span>{text.length} caractère{text.length > 1 ? 's' : ''}</span></div>
            <div className="preview"><span className="preview-label"><span /> APERÇU EN DIRECT</span><p aria-live="polite" aria-atomic="true" className={text ? 'preview-text' : 'preview-placeholder'}>{text || 'Vos mots prendront vie ici…'}</p></div>
          </section>
        </div>
        <footer><span className="footer-mark">✳</span> Rien de compliqué. Juste l’essentiel.<span className="session-note">Compteur et texte réinitialisés au rechargement.</span></footer>
      </main>
    </div>
  );
}
