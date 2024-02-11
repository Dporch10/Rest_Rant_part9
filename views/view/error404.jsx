const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/bird.jpg" alt="Bird" />
              Photo by <a href="https://unsplash.com/@kevinmueller?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kevin Mueller</a> on <a href="https://unsplash.com/photos/orange-parrot-aeNg4YA41P8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
          </main>
      </Def>
    )
  }

module.exports = error404