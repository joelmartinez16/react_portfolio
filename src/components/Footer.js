import React from 'react';


export default function Footer() {

  return (
    <footer class="page-footer fixed-bottom font-small   light-blue lighten-3 pt-4">
        <div class="container">
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a
                class="btn-floating btn-fb mx-1"
                href="https://github.com/joelmartinez16"
              >
                <i class="fab fa-github"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="btn-floating btn-li mx-1"
                href="https://www.linkedin.com/in/mart8909/"
              >
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}