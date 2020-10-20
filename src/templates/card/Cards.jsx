import React from 'react';
import Img from '../../main/images/cart.jpg';

export default props => {
    return (
        <div class="card">
                  <img src={Img} className="card-img-top" alt="..."></img>
                  <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                    <p class="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                  </div>
                  <footer class="blockquote-footer">
                      <small class="text-muted">
                        {props.footer}
                      </small>
                    </footer>
                </div>
    )
}