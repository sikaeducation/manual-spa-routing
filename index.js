const app = document.querySelector("#app")

const header = document.createElement("header")
header.innerHTML = `
  <h1>Our Site</h1>
  <nav>
    <ul>
      <li>
        <a href="#" id="products">Products</a>
      </li>
      <li>
        <a href="#" id="about">About Us</a>
      </li>
    </ul>
  </nav>
`

const products = document.createElement("main")
products.innerHTML = `
  <h2>Products</h2>
  <ul>
    <li>Briefcase</li>
    <li>Backpacks</li>
    <li>Satchels</li>
  </ul>
`

const about = document.createElement("main")
about.innerHTML = `
  <h2>About Us</h2>
  <p>We've been making great products since the year we were founded.</p>
`

const footer = document.createElement("footer")
footer.innerHTML = `
  <small>© 2020, by Us</small>
`

header.querySelector("#products").addEventListener("click", event => {
  event.preventDefault()
  app.innerHTML = ""
  app.append(header, products, footer)
})
header.querySelector("#about").addEventListener("click", event => {
  event.preventDefault()
  app.innerHTML = ""
  app.append(header, about, footer)
})

app.append(header, products, footer)
