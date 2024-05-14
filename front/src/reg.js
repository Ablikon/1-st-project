import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <form class="form-signin">
        <img
          class="mb-4"
          src="logo192.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
        <label for="inputEmail" class="sr-only">
          UserName
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Username"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
        <p class="mt-5 mb-3 text-muted">Hello Evgeniy</p>
      </form>
    )
}

export default App