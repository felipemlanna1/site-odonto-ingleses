import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Tooth, Shield,
  Star, InstagramLogo, ArrowRight, Wheelchair, Users,
  FirstAid, CalendarBlank, Certificate, Sparkle, Smiley
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548988027646?text=Olá! Gostaria de agendar uma consulta na Odonto Ingleses.'
const PHONE = '(48) 3269-2247'
const PHONE2 = '(48) 98802-7646'
const ADDRESS = 'R. Intendente João Nunes Vieira, 741 — Ingleses do Rio Vermelho, Florianópolis/SC'
const INSTAGRAM = 'https://instagram.com/clinicaodontoingleses'
const HOURS = 'Seg a Sex, horário comercial'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</motion.div>)
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])
  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand"><img src="./images/logo.png" alt="Odonto Ingleses" /></a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta"><WhatsappLogo size={14} weight="fill" /> Agendar</a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}><WhatsappLogo size={18} weight="fill" /> Agendar Consulta</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-clinic.jpg" alt="Clínica Odonto Ingleses" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />28 Anos de Excelência — Ingleses, Florianópolis</div></Reveal>
        <Reveal delay={0.1}><h1>Seu sorriso merece<br /><em>cuidado especializado</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Clínica odontológica completa com 3 consultórios equipados, laboratório de prótese próprio e equipe de dentistas pós-graduados. Referência no Norte da Ilha há quase 3 décadas.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Agendar Consulta</a>
            <a href="#especialidades" className="btn-outline">Especialidades <ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Ingleses — Floripa</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.5 — 50+ avaliações</span></div>
            <div className="hero-info-item"><Wheelchair size={16} weight="duotone" /><span>Acessível a cadeirantes</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/consultorio.jpg" alt="Consultório Odonto Ingleses" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Quem Somos</div><div className="history-year">1998</div><h2 className="section-title">28 anos cuidando do seu<br /><em>sorriso</em></h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">A Odonto Ingleses é referência em odontologia no Norte da Ilha de Florianópolis. Há 28 anos prestando serviços de excelência, com profissionais experientes e altamente qualificados, oferecemos dos tratamentos tradicionais aos mais modernos da odontologia.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Sob a responsabilidade técnica da Dra. Isabel Cristina da Costa e administração de Edenilson Scremin Martins, contamos com dentistas pós-graduados, auxiliares especializados e laboratório de prótese dentária próprio no local.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><CalendarBlank size={18} weight="duotone" /> Agendar Avaliação</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Specialties() {
  const items = [
    { icon: Tooth, title: 'Clínica Geral', desc: 'Restaurações, limpezas, tratamento de cáries e manutenção da saúde bucal com protocolos atualizados.', image: './images/consultorio.jpg' },
    { icon: Sparkle, title: 'Estética Dental', desc: 'Clareamento, facetas, lentes de contato e harmonização do sorriso para resultados naturais e bonitos.', image: './images/sorriso.jpg' },
    { icon: FirstAid, title: 'Implantodontia', desc: 'Implantes dentários com tecnologia de ponta para devolver função e estética ao seu sorriso.', image: './images/implante.jpg' },
    { icon: Shield, title: 'Ortodontia', desc: 'Aparelhos fixos, estéticos e alinhadores. Tratamento personalizado para cada caso.', image: './images/hero-clinic.jpg' },
    { icon: Smiley, title: 'Prótese Dentária', desc: 'Laboratório próprio no local. Próteses fixas, removíveis e sobre implante com ajuste perfeito.', image: './images/esterilizacao.jpg' },
    { icon: Certificate, title: 'Endodontia', desc: 'Tratamento de canal com técnicas modernas, segurança e conforto para o paciente.', image: './images/consultorio.jpg' },
  ]
  return (
    <section className="cardapio" id="especialidades">
      <div className="container">
        <Reveal><div className="section-label">Especialidades</div><h2 className="section-title">Cuidado completo para<br />toda a <em>família</em></h2></Reveal>
        <div className="cardapio-grid">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={p.image} alt={p.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category"><p.icon size={14} weight="duotone" /> Odontologia</div>
                  <h3 className="cardapio-card-title">{p.title}</h3>
                  <p className="cardapio-card-desc">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Structure() {
  const features = [
    { icon: FirstAid, title: '3 Consultórios', desc: 'Consultórios climatizados e equipados com o que há de melhor em tecnologia odontológica.' },
    { icon: Shield, title: 'Esterilização Rigorosa', desc: 'Central de esterilização com protocolos rigorosos de desinfecção e esterilização de instrumentais.' },
    { icon: Tooth, title: 'Laboratório Próprio', desc: 'Laboratório de prótese dentária no local. Mais agilidade e qualidade nos tratamentos protéticos.' },
    { icon: Wheelchair, title: 'Totalmente Acessível', desc: 'Recepção e consultórios acessíveis a cadeirantes. Inclusão e conforto para todos os pacientes.' },
  ]
  return (
    <section className="experience" id="estrutura">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Estrutura</div><h2 className="section-title">Infraestrutura completa<br />para sua <em>segurança</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (<Reveal key={f.title} delay={i * 0.1}><div className="experience-feature"><div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div><div><h4>{f.title}</h4><p>{f.desc}</p></div></div></Reveal>))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/esterilizacao.jpg" alt="Central de esterilização" />
              <div className="experience-image-badge"><span className="number">28</span><span className="label">Anos de experiência</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-clinic.jpg', alt: 'Recepção' },
    { src: './images/consultorio.jpg', alt: 'Consultório' },
    { src: './images/sorriso.jpg', alt: 'Sorriso' },
    { src: './images/implante.jpg', alt: 'Implante' },
    { src: './images/esterilizacao.jpg', alt: 'Esterilização' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Galeria</div><h2 className="section-title">Conheça nossa <em>clínica</em></h2></Reveal>
        <div className="gallery-grid">{images.map((img, i) => (<Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>))}</div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Excelente atendimento! Equipe muito profissional e atenciosa. O consultório é moderno e muito limpo. Me senti super segura durante todo o tratamento. Recomendo muito!', author: 'Juliana M.', rating: 5 },
    { text: 'Faço tratamento na Odonto Ingleses há anos. Os profissionais são ótimos, sempre explicam tudo com paciência. O laboratório próprio é um grande diferencial.', author: 'Ricardo F.', rating: 5 },
    { text: 'Clínica completa e organizada. Fiz implante com a equipe e o resultado ficou perfeito. Estrutura impecável e atendimento humanizado. Nota máxima!', author: 'Carla S.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliações Google</div><h2 className="section-title">O que dizem nossos <em>pacientes</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.5</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight={i < 4 ? 'fill' : 'duotone'} />)}</div>
                <div className="reviews-count">50+ avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (<Reveal key={i} delay={i * 0.12}><div className="review-card"><div className="review-card-quote">&ldquo;</div><div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div><p className="review-card-text">{r.text}</p><div className="review-card-author">{r.author}</div></div></Reveal>))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Agende sua consulta<br /><em>hoje mesmo</em></h2>
          <p>Venha conhecer a clínica odontológica mais completa dos Ingleses. 28 anos de experiência cuidando do seu sorriso.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: `${PHONE} | ${PHONE2}` },
    { icon: Users, title: 'Email', text: 'odontoingleses@gmail.com' },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localização</div><h2 className="section-title">Agende sua <em>consulta</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (<Reveal key={item.title} delay={i * 0.1}><div className="contact-item"><div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div><div><h4>{item.title}</h4><p>{item.text}</p></div></div></Reveal>))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" /> Agendar pelo WhatsApp</a></Reveal>
          </div>
          <Reveal delay={0.2}><div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1!2d-48.3936!3d-27.4311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzUyLjAiUyA0OMKwMjMnMzcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Localização Odonto Ingleses" loading="lazy" /></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-brand-text">Odonto Ingleses</div><p className="footer-brand-desc">Clínica odontológica com 28 anos de excelência. 3 consultórios, laboratório próprio, todas as especialidades. Ingleses, Florianópolis.</p></div>
          <div><div className="footer-title">Navegação</div><ul className="footer-links"><li><a href="#sobre">Sobre</a></li><li><a href="#especialidades">Especialidades</a></li><li><a href="#estrutura">Estrutura</a></li><li><a href="#avaliacoes">Avaliações</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div><div className="footer-title">Contato</div><ul className="footer-links"><li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li><li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@clinicaodontoingleses</a></li><li><a>{ADDRESS}</a></li></ul></div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Odonto Ingleses — Todos os direitos reservados</span>
          <div className="footer-social"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstagramLogo size={20} weight="regular" /></a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a></div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() { return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a> }

export default function App() {
  return (<><Navbar /><main><Hero /><About /><Specialties /><Structure /><Gallery /><Reviews /><CtaSection /><Contact /></main><Footer /><WhatsAppFloat /></>)
}
