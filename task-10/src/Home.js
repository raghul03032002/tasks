import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div><div>
    <main>
        <div class='group'>
        <section class="innner-group">
            <div class='content'>
                <h1 class='head'>Welcome! To our Man Power Organisation</h1>
           <Link to="/ViewProject" class='btn btn-light mx-5 mt-2' id='voc'> view cart</Link>
            </div>
        </section>
       </div>
    </main>
</div></div>
  )
}

export default Home