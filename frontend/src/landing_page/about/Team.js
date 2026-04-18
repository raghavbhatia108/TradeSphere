import React from 'react'
import './About.css'

const Team = () => {


  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet the Founder</h2>
        
        <div className="">
          <div className="row">
            <div className="col-6">
             < img src="/media/images/founder.jpeg" alt="Raghav Bhatia" className="team-photo" style={{borderRadius: '50%', marginLeft:"3rem"}} height="300" />
              </div>
                <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3 className="mb-1">Raghav Bhatia</h3>
            <p className="text-success mb-2">Founder & CEO</p>

            <p className="lh-lg">
              Raghav is a passionate entrepreneur and technology enthusiast with a strong background in finance and software development. He founded TradeSphere with the goal of building a globally accessible trading platform.
            </p>
          </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Team