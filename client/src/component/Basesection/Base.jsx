import React from 'react'

export default function Base() {
  return (
    < >
       <div className="container second">
    <div className="item">
      <div className="img img-first" />
      <div className="card">
        <h3>Rock climbing</h3>
        <p>
          The goal is to reach the summit of a formation or the endpoint of a
          usually pre-defined route without falling
        </p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <div className="item">
      <div className="img img-second" />
      <div className="card">
        <h3>Caving</h3>
        <p>
          Exploring underground through networks of tunnels and passageways,
          which can be natural or artificial.
        </p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <div className="item">
      <div className="img img-third" />
      <div className="card">
        <h3>Parachuting</h3>
        <p>
          Jumping from an aeroplane and falling through the air before opening
          your parachute.
        </p>
        <a href="#">Learn more</a>
      </div>
    </div>
  </div>
  <div className="blank" />
    </>
  )
}
