import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      },
      {
        icon: <FaHiking />,
        title: "Unlimited Hiking",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      },
      {
        icon: <FaShuttleVan />,
        title: "Pickup Shuttle",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      }
    ]
  }
  render() {
    return (
      <>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((service, index) => {
              return (
                <article key={index} className="service">
                  <span>{service.icon}</span>
                  <h6>{service.title}</h6>
                  <p>{service.info}</p>
                </article>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}

export default Services;
