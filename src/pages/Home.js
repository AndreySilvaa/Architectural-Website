import React from 'react'
import { dataHomeGallery } from '../data/Home'
import { Slider } from '../components/Slider'

// CSS
import './Home.css'

const Home = () => {
  return (
    <div>
      <header className='header-home'>
        <h1>gallery.</h1>
        <p>We design People Inspired Experiences that create positive change in people's lives.</p>
        <div className='imgs-header'>
         {dataHomeGallery[0].map((item, i) => (
          <div key={i}><img src={item[i]} alt="img-gallery" /></div>
         ))}
        </div>
      </header>

      <section className='home-sec1'>
          <article>
            {dataHomeGallery[1].map((item, i) => (
              <div key={i}><h2>{item.title}</h2> <p>{item.message}</p> </div>
            ))}
          </article>
      </section>

      <section className='home-sec2'>
              <article>
                <div className='sec2-dv-img'><img src={dataHomeGallery[2][0].img} alt="" /></div>
                <div className='sec2-dv-info'>
                  <h2>{dataHomeGallery[2][0].title}</h2>
                  <p>{dataHomeGallery[2][0].message}</p>
                  <button className='home-sec2-button'>SEE DESIGN WORK</button>
                </div>
              </article>
      </section>

      <section className='home-sec3'>
              <div className='home-sec3-info'>
                <p>{dataHomeGallery[3]}</p>
              </div>
      </section>

      <section className='home-sec4'>
              {dataHomeGallery[4].map((item, i) => (
                <div key={i} className={`dv-info ${i === 2 ? ('noborder') : ('')}`}>
                  <div className='dvimg' style={{backgroundImage: `url(${item.img})`}}></div>
                  <div className='dv-details'>
                    <h5>{item.name}</h5>
                    <h6>{item.job}</h6>
                    <p>{item.message}</p>
                  </div>
                </div>
              ))}
      </section>

      <section className='home-sec5'>
        <Slider></Slider>
      </section>

      <section className='home-sec6'>
              <div className='layout'>
                <div className='row1'>
                  <div className='col1'><div style={{backgroundImage: `url(${dataHomeGallery[6][0].img1})`}}></div></div>
                  <div className='col2'><div style={{backgroundImage: `url(${dataHomeGallery[6][0].img2})`}}></div></div>
                </div>

                <div className='row2'>
                  <div className='col1'>
                    <div className='imgdv'>
                      <div className='col1-not'></div>
                      <div className='col1-pic'><div style={{backgroundImage: `url(${dataHomeGallery[6][1].img1})`}}></div></div>
                    </div>
                    <div className='textdv'>projects</div>
                  </div>
                  <div className='col2'><div style={{backgroundImage: `url(${dataHomeGallery[6][1].img2})`}}></div></div>
                </div>
              </div>
      </section>

      <section className='home-sec7'>
        <div className='icon'>
            {dataHomeGallery[7].map((item, i) => (
              <div key={i} style={{backgroundImage: `url(${item})`}}></div>
            ))}
        </div>
      </section>

      <section className='home-sec8'>
        <div className='dvtexts'>
              <p>{dataHomeGallery[8][0].text1}</p>
              <p>{dataHomeGallery[8][0].text2}</p>
        </div>
      </section>
    </div>
  )
}

export default Home