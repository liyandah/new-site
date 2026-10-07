import React, { useState } from 'react';
import {
  Menu, X, Smartphone, Wrench, Car, Code2, Globe2, Database,
  ShieldCheck, ShoppingBag, CreditCard, BatteryCharging,
  MonitorSmartphone, RefreshCw, Mail, Phone, ArrowRight,
  CheckCircle2, Users, Network, ChevronRight
} from 'lucide-react';

const services = [
  { icon: Smartphone, title: 'Mobile Phones & Samsung Products', text: 'Quality mobile phones, Samsung devices and trusted accessories for individuals and businesses.' },
  { icon: ShoppingBag, title: 'Phone Accessories', text: 'Chargers, cables, earphones, cases, screen protectors, Bluetooth accessories and more.' },
  { icon: Car, title: 'Car Accessories', text: 'Car chargers, phone holders, cables, Bluetooth products and practical vehicle technology accessories.' },
  { icon: Wrench, title: 'Same-Day Phone Repairs', text: 'Battery, Screen/LCD, Backglass, Flashing and Software Updates, subject to parts availability.' },
  { icon: CreditCard, title: 'Phones on Credit', text: 'Selected devices may be available on credit, subject to approval, ID verification and agreed terms.' },
  { icon: Code2, title: 'Web & Application Development', text: 'Responsive websites, business web applications, custom software and systems integration.' }
];

const websites = [
  { name: 'Cyber Cothtech Networks', host: 'cybercothtechnetworks.co.zw', url: 'https://cybercothtechnetworks.co.zw/', text: 'Enterprise IT, hosting and application development.' },
  { name: 'Himmelstor Farm', host: 'himmelstor.co.zw', url: 'https://himmelstor.co.zw/', text: 'Integrated agriculture, consulting and agro-tourism in Zimbabwe.' }
];

const repairs = [
  { icon: BatteryCharging, title: 'Battery Replacement', text: 'Battery and related power support.' },
  { icon: MonitorSmartphone, title: 'Screen / LCD', text: 'Screen and LCD replacement for damaged displays.' },
  { icon: Smartphone, title: 'Backglass', text: 'Backglass replacement where applicable.' },
  { icon: RefreshCw, title: 'Flashing & Software', text: 'Software reloads, firmware support and updates.' }
];

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={close}>
            <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="SAMAZ Mobile Technology" />
          </a>
          <nav className={open ? 'nav-links open' : 'nav-links'}>
            <a href="#about" onClick={close}>About</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#repairs" onClick={close}>Repairs</a>
            <a href="#digital" onClick={close}>Digital</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="nav-cta" href="tel:+263786137481" onClick={close}>Call Us</a>
          </nav>
          <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">SAMAZ MOBILE TECHNOLOGY</span>
              <h1>Mobile Technology. Reliable Service. <span>Digital Innovation.</span></h1>
              <p>Mobile phones, Samsung products, phone accessories, car accessories, same-day repairs, web development and application development in Zimbabwe.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#services">Explore Services <ArrowRight size={18}/></a>
                <a className="btn secondary" href="https://wa.me/263786137481">WhatsApp Us</a>
              </div>
              <div className="hero-badges">
                <span><CheckCircle2 size={17}/> Same-Day Repairs</span>
                <span><CheckCircle2 size={17}/> Phones on Credit</span>
                <span><CheckCircle2 size={17}/> Web & App Development</span>
              </div>
            </div>
            <div className="hero-visual">
              <img className="hero-store" src={`${import.meta.env.BASE_URL}store.png`} alt="SAMAZ Mobile Technology store" />
              <div className="float f1"><Smartphone/><div><b>Premium Devices</b><small>Samsung & more</small></div></div>
              <div className="float f2"><Wrench/><div><b>Same-Day Repairs</b><small>Fast technical support</small></div></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">ABOUT SAMAZ</span>
              <h2>Integrated technology solutions for the Zimbabwean market.</h2>
              <p className="lead">SAMAZ Mobile Technology is a Zimbabwean technology company focused on mobile retail, technical repairs, accessories and digital solutions.</p>
              <p>We provide mobile phones, Samsung products, phone accessories, car accessories, same-day phone repairs, website development and application development. Through our partnership with Cyber Cothtech Networking, we also connect customers to wider ICT services.</p>
            </div>
            <div className="stats">
              <div><strong>2024</strong><span>Incorporated</span></div>
              <div><strong>6+</strong><span>Core service areas</span></div>
              <div><strong>1</strong><span>Strategic ICT partner</span></div>
              <div><strong>100%</strong><span>Customer focused</span></div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">OUR DIRECTION</span>
              <h2>Vision, Mission & Core Values</h2>
            </div>
            <div className="three-grid">
              <article className="info-card"><Globe2/><h3>Vision</h3><p>To become one of Zimbabwe's most trusted technology brands, recognized for quality mobile products, dependable repair services and innovative digital solutions.</p></article>
              <article className="info-card"><Users/><h3>Mission</h3><p>To provide accessible, reliable and affordable mobile technology products and services while delivering practical digital solutions that help individuals and businesses grow.</p></article>
              <article className="info-card"><ShieldCheck/><h3>Core Values</h3><p>Customer Focus, Reliability, Innovation, Integrity, Professionalism, Quality Service and Accountability.</p></article>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading"><span className="eyebrow">WHAT WE DO</span><h2>Products & Services</h2><p>One technology partner for mobile, repair, vehicle and digital needs.</p></div>
            <div className="service-grid">
              {services.map(({icon:Icon,title,text}) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon/></div>
                  <h3>{title}</h3><p>{text}</p>
                  <a href="#contact">Enquire <ChevronRight size={17}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="repairs" className="section repairs">
          <div className="container repairs-grid">
            <div>
              <span className="eyebrow light">PROFESSIONAL REPAIRS</span>
              <h2>Same-Day Phone Repairs & Technical Support</h2>
              <p>Repairs are done the same day where parts are available and the device condition allows.</p>
              <div className="notice"><strong>Free shatter glass</strong><span>Free shatter glass for all LCD replacements.</span></div>
              <div className="notice"><strong>Bring your ID</strong><span>Please bring a valid ID for any services for secure verification and collection.</span></div>
            </div>
            <div className="repair-list">
              {repairs.map(({icon:Icon,title,text}) => <div className="repair-item" key={title}><Icon/><div><strong>{title}</strong><span>{text}</span></div></div>)}
            </div>
          </div>
        </section>

        <section id="digital" className="section">
          <div className="container digital-grid">
            <div>
              <span className="eyebrow">DIGITAL SOLUTIONS</span>
              <h2>Custom Web & Application Development</h2>
              <p className="lead">Practical systems that help businesses improve efficiency, customer service and online presence.</p>
              <div className="feature-list">
                <div><Globe2/><span><strong>Website Development</strong>Responsive corporate and e-commerce websites.</span></div>
                <div><Code2/><span><strong>Custom Applications</strong>Business portals and tailored software solutions.</span></div>
                <div><Database/><span><strong>Systems Integration</strong>API and database integration for connected workflows.</span></div>
                <div><Network/><span><strong>ICT Partnership</strong>Broader ICT services with Cyber Cothtech Networking.</span></div>
              </div>
            </div>
            <div className="site-previews">
              {websites.map((site) => (
                <article className="browser" key={site.host}>
                  <div className="browser-bar"><i></i><i></i><i></i><span>{site.host}</span></div>
                  <div className="browser-frame">
                    <iframe src={site.url} title={site.name} loading="lazy" />
                  </div>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <strong>{site.name}</strong>
                    <span>{site.text}</span>
                    <em>View site <ArrowRight size={16}/></em>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container partnership">
            <div><span className="eyebrow">STRATEGIC ICT PARTNERSHIP</span><h2>Extended capability through Cyber Cothtech Networking</h2><p>Our partnership enables customers to access broader ICT support including networking, connectivity, database support, systems services and practical cybersecurity advisory.</p></div>
            <div className="partner-box"><Network size={46}/><strong>ICT Services</strong><span>Networking • Databases • Systems • Security Advisory</span></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div><span className="eyebrow light">CONTACT SAMAZ</span><h2>Ready to talk technology?</h2><p>Contact us for mobile phones, repairs, accessories, credit enquiries or digital development.</p></div>
            <img className="contact-phone" src={`${import.meta.env.BASE_URL}phone.png`} alt="Smartphone" />
            <div className="contact-cards">
              <a href="tel:+263786137481"><Phone/><span><small>Phone</small><strong>+263 78 613 7481</strong></span></a>
              <a href="mailto:info@samazmobiletechnology.co.zw"><Mail/><span><small>Email</small><strong>info@samazmobiletechnology.co.zw</strong></span></a>
              <a href="https://samazmobiletechnology.co.zw"><Globe2/><span><small>Website</small><strong>samazmobiletechnology.co.zw</strong></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-grid"><a className="brand footer-brand" href="#home"><img className="brand-logo footer-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="SAMAZ Mobile Technology" /></a><p>© {new Date().getFullYear()} SAMAZ Mobile Technology. All rights reserved.</p><a className="footer-credit" href="https://cybercothtechnetworks.co.zw/" target="_blank" rel="noopener noreferrer">Created by cybercothtechnetworks.co.zw</a></div></footer>
    </>
  );
}
