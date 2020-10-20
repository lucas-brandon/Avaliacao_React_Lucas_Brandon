import React from 'react';
import './footer.css'

export default props => {
    return (
        <>
        <div>
            <footer className="dashboard">
                <p>2020 Collective. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank"
                    className="text-primary">W3layouts.</a></p>
            </footer>
        </div>
        <script>{
        function toggleMenu() {
          let body = document.querySelector("body");
          let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
          if(hasCollapsed) {
           body.classList.remove("sidebar-menu-collapsed");
           body.classList.add("noscroll");
          } else {
            body.classList.remove("noscroll");
            body.classList.add("sidebar-menu-collapsed");
          };
        }
        }
        
      </script>
      </>
    )
}