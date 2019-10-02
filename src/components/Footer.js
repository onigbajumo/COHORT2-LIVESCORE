import React from 'react';
import '../styles/home.css'
const Footer = () => {
    return (
        <footer class="page-footer grey darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Cohort 2.2 Soccer</h5>
              <p class="grey-text text-lighten-4"> This website was created by Cohort v2.2 for a constant viewership of livescores. Long live football</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Contact Us</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Tumblr</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright grey darken-4">
          <div class="container center">
          © 2019 Copyright LearnFactory
          
          </div>
        </div>
      </footer>
    )
}

export default Footer;