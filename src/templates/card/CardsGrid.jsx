import React from 'react';
import Cards from './Cards';

export default props => {
    return (
        
        <section class="template-cards">
          {/* Card Columns */}
          <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Card Columns</h3>
            </div>
            <div class="card-body">
              <div class="card-columns">
                <Cards title="Card title that wraps to a new line"></Cards>
                <Cards footer="Someone famous in title"></Cards>
                <Cards title="Card title" footer="Last updated 3 mins ago"></Cards>
                <Cards footer="Someone famous in title"></Cards>
                <Cards title="Card title" footer="Last updated 3 mins ago"></Cards>
                <Cards title="Card title" footer="Last updated 3 mins ago"></Cards>
                <Cards title="Card title" footer="Last updated 3 mins ago"></Cards>
              </div>
            </div>
          </div>
          </section>
    
    )
}