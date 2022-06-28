const Header = () => {
  return(
      <div className = "header">
          <h1> ELIZA'S DASHBOARD </h1>
      </div>

  )     
};

const Reviews = () => {
  return(
      <div className = "reviews">
          <h2>Reviews</h2>
          <p className = "review">'5/5!' <br></br> "Wonderful!" <br></br> "Star struck!" <br></br> "Meh."</p>
      </div>
  )
};

const AverageRating = () => {
  return(
      <div className = "avgRating">
          <h2>Average Rating</h2>
          <ul className = "list2">
              <li>4.9</li>
          </ul>
      </div>
  )
};

const WebsiteVisitors = () => {
  return(
      <div className = "visitors">
          <h3>Website Visitors</h3>
          <ul className="list2">
            <li>Anonymous</li>
            <li>ElizasBiggestFan</li>
            <li>ImAHater</li>
          </ul>
      </div>
  )
};

const Menu = () => {
  return(
      <div className = "menu">
          <h2>Menu</h2>
          <ul className = "menuList">
              <li>Home</li>
              <br></br>
              <br></br>
              <li>Friends</li>
              <br></br>
              <br></br>
              <li>Followers</li>
              <br></br>
              <br></br>
              <li>Get Connected</li>
              <br></br>
              <br></br>
              <li>Leave a Review</li>
              <br></br>
              <br></br>
              <li>Log Out</li>
          </ul>
      </div>
  )
};

const Analysis = () => {
  return(
      <div className = "analysis">
          <h2>Analysis</h2>
          <ul className = "list2">
              <li>127</li>
              <br></br>
              <li>444</li>
              <br></br>
              <li>646</li>
          </ul>
      </div>
  )
}

class App extends React.Component {
  render() {
      return(
          <div>
              <Header />
              <Reviews />
              <AverageRating />
              <WebsiteVisitors />
              <Analysis />
              <Menu />
          </div>
      )
  }
};

ReactDOM.render(<App />, document.querySelector('main'))