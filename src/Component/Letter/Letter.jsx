import React from 'react'
import './Letter.css'

const Letter = () => {
  return (
    <main>
        <section class="newsletter-area">
            <div class="newsletter-area-container">
                <div class="newsletter-area-content">
                    <div class="newsletter-area-content-left">
                        <h1>TRIAL START FIREST 30 DAYS.</h1>
                        <p>Enter your email to create or restart your memberships.</p>
                    </div>
                    <div class="newsletter-area-content-right">
                        <form action="#">
                            <input type="email" required placeholder="Enter your email"/>
                            <button>GET STARTED</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Letter