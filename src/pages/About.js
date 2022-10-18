import React, { useState } from 'react'
import { Slider } from '../components/Slider2'
import { aboutData } from '../data/About'

// CSS
import './About.css'


const About = () => {

  const [fq, setfq] = useState()

  const fqdiv = (num) =>{
    if(num === fq){setfq(-1)}
    else{setfq(num)}
  }

  return (
    <div>
      <header className='about-header' style={{backgroundImage: `url(${aboutData[0][0].header.headerImg})`}}>
        <section className='about-header-info'>
          <div>
            <span>01</span>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div>
          <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce 
            husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize 
            discretion led. </p>
        </section>
      </header>

      <section className='about-sec1'>
        <div>
          <h2>Architectural design and engineering firm</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button>LEARN MORE</button>
        </div>
      </section>

      <section className='about-sec2'>
        <article>
          <h2>Important Leadership Skills</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          <div className='icons-dv'>
            {aboutData[1].map((item, i) => (
              <div className='icon-dv' key={i}>
                  <div className='icon-img'><img src={item.icon} alt="icon-img" /></div>
                  <h4>{item.title}</h4>
                  <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className='about-sec3'>
              <article className='art1'>
                <div className='col1'>
                  <div className='inter-text'><div>WE COLLABORATE WITH BRANDS AND AGENCIES TO CREATE MEMORABLE EXPERIENCES.</div></div>
                  <div className='pic'><img src={aboutData[2][0].img1} alt="" /></div>
                </div>

                <div className='col2'>
                  <div><p className='text-weight'>The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS. </p></div>
                  <div><p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. </p><p>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.</p></div>
                </div>
              </article>


              <article className='art2'>
                <div className='text'>
                  <h2>Understanding Leadership</h2>
                  <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                  <button>LEARN MORE</button>
                </div>

                <div className='dv-pic'>
                  <div className='pic' style={{backgroundImage: `url(${aboutData[2][1].img2})`}}>
                    {aboutData[2].map((item, i) => (
                      <a href={aboutData[2][2][i].url} target="blank" key={i}><span key={i}><img src={aboutData[2][2][i].icon} alt="social-media icon" /></span></a>
                    ))}
                  </div>
                </div>
              </article>
      </section>

      <section className='about-sec4'>
              <article>
                      <h2>Meet The Team</h2>
                      <div className='dv-team'>
                          {aboutData[3].map((item, i) => (
                            <div key={i} className='person'>
                              <div className='img' style={{backgroundImage: `url(${item.img})`}}></div>
                              <h3>{item.name}</h3>
                              <p className='weight'>{item.job}</p>
                              <p className='message'>{item.message}</p>
                              <div className='icons'>
                              {aboutData[2].map((item, i) => (
                                <a key={i} href={aboutData[2][2][i].url} target="blank"><span key={i}><img src={aboutData[2][2][i].icon} alt="social-media icon" /></span></a>
                              ))}
                              </div>
                            </div>
                          ))}
                      </div>
              </article>
      </section>

      <section className='about-sec5'>
            <article>
              <h2>$ 1,255,345</h2>
              <p className='white'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
              <div className='icons-dv'>
            {aboutData[4].map((item, i) => (
              <div className='icon-dv' key={i}>
                  <div className={`icon-img ${i === 1 ? ('nopadding') : ('')}`}><img src={item.icon} alt="icon-img" /></div>
                  <h4>{item.title}</h4>
                  <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            ))}
          </div>
            </article>
      </section>

      <section className='about-sec6'>
              <article>
                <h2>We create, restore & evolve iconic brands</h2>
                <Slider/>

                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </article>
      </section>

      <section className='about-sec7'>
              <article>
                <h2>Facts & Questions</h2>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>

                <div className='fq-dv'>
                  {aboutData[6].map((item, i) => (
                    <div className='fq' key={i} onClick={() => fqdiv(i)}>
                      <div key={i} className='question' style={fq === i ? {backgroundColor: '#F2F2F2'} : {}}>
                        <p>{item.fq}</p>
                        <img src={fq === i ? (item.less) : (item.plus)} alt=""></img>
                      </div>

                      {fq === i ? (<div className='answer' >
                        {item.message}
                      </div>) : ''}
                    </div>
                  ))}
                </div>
              </article>
      </section>

      <section className='about-sec8'>
                  <article>
                    <h2>(480) 565-7878</h2>
                    <p>4140 PARKER RD. ALLENTOWN, NEW MEXICO 56674</p>
                      
                    <div className="schedule">
                      <p>Tuesday – Friday: 8am – 7pm</p>
                      
                      <p>Saturday – Sunday: 8am – 10pm</p>
                      
                      <p>Closed Monday</p>
                    </div>
                     

                    <div className='icon'>
                            {aboutData[2].map((item, i) => (
                                <a key={i} href={aboutData[2][2][i].url} target="blank"><span key={i}><img src={aboutData[2][2][i].icon} alt="social-media icon" /></span></a>
                            ))}
                    </div>
                  </article>
      </section>
    </div>
  )
}

export default About