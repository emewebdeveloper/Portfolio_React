import React from 'react'
import './portfolio.css'
import IMG1  from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.jpg";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="image1" />
          </div>
            <h3>Trakinng of Financial Visualization</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="image1" />
          </div>
            <h3>Crypto currency dashboard and Financial Visualization</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="image1" />
          </div>
            <h3>Figma dashboard UI kit for designs</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="image1" />
          </div>
            <h3>This is a Portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="image1" />
          </div>
            <h3>Visualization in Figma</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="image1" />
          </div>
            <h3>Chart Templates</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">Github</a>
            <a href="https://www.google.com" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          
        </article>
      </div>
    </section>
  )
}

export default portfolio