import React from 'react'
import './index.scss'
import Meal from '../../images/meal-sharing.jpg'
import Name from '../../images/name_it.jfif'
import Dianox from '../../images/dianox-2.jpg'
import Todo from '../../images/todo.png'
import Weather from '../../images/weather.jpg'

import Portfolio from '../../images/potfolio.jpg'

function Projects() {
  return (
    <div class="project">
      <div class="project-1">
        <h1>Dianox </h1>
        <h3 className="p-heading">
          Full-stack application for Dianox. I created this app by using
          technologies like Next.js and Bootstrap for the frontend, and Node.js,
          MongoDB and AWS for the backend and database.
        </h3>
        <h1>Stack</h1>
        <h3>Next.js, MongoDB, AWS, Node and Bootstrap</h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a href="https://dianox.com" alt="link" className="web-link">
            Source
          </a>
        </div>
        <img src={Dianox} className="meal" alt="Meals"></img>
      </div>
      <div class="project-1">
        <h1>Meal Sharing App </h1>
        <h3 className="p-heading">
          This is a full-stack app that helps users to share good meals with
          others and user can also book meals.{' '}
        </h3>
        <h1>Stack</h1>
        <h3>React, Bootstrap, Node and MySQL</h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a
            href="https://meal-sharing-shan.herokuapp.com/home"
            alt="link"
            className="web-link"
          >
            Source
          </a>
        </div>

        <img src={Meal} className="meal" alt="Meals"></img>
      </div>
      <div class="project-1">
        <h1>Simply Name it! </h1>
        <h3 className="p-heading">
          Simply-name it! is a voting app that helps users to decide together in
          groups. The app is designed in a way that users can invite other users
          to participate in the election of the winning option.
        </h3>
        <h1>Stack</h1>
        <h3>React, MySQL, Storybook, AWS and Firebase</h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a
            href="https://staging-simply-name-it.herokuapp.com/profile"
            alt="link"
            className="web-link"
          >
            Source
          </a>
        </div>
        <img src={Name} className="meal" alt="Meals"></img>
      </div>
      <div class="project-1">
        <h1>Todo App </h1>
        <h3 className="p-heading">
          Todo app is a simple app to write and manage to do tasks. This app has
          functionality of drag and drop.
        </h3>
        <h1>Stack</h1>
        <h3>React and CSS </h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a
            href="https://distracted-einstein-f6e628.netlify.app/"
            alt="link"
            className="web-link"
          >
            Source
          </a>
        </div>
        <img src={Todo} className="meal" alt="Meals"></img>
      </div>

      <div class="project-1">
        <h1>Weather App </h1>
        <h3 className="p-heading">
          Weather app is an app to find weather details of cities and countries
        </h3>
        <h1>Stack</h1>
        <h3>HTML, CSS, and JavaScript</h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a
            href="https://shan-weather.netlify.app/"
            alt="link"
            className="web-link"
          >
            Source
          </a>
        </div>
        <img src={Weather} className="meal" alt="Meals"></img>
      </div>
      <div class="project-1">
        <h1>Portfolio </h1>
        <h3>My portfolio</h3>
        <h1>Stack</h1>
        <h3>HTML and SCSS</h3>
        <div class="container-link">
          <a
            href="https://github.com/shanhaider23"
            alt="github"
            className="git-link"
          >
            Code
          </a>
          <a
            href="https://shan-e-haider.netlify.app/projects.html"
            alt="link"
            className="web-link"
          >
            Source
          </a>
        </div>
        <img src={Portfolio} className="meal" alt="Meals"></img>
      </div>
    </div>
  )
}

export default Projects
