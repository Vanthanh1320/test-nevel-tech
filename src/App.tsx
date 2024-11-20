import './fonts/PingFang-SC-Light.ttf'
import './fonts/PingFang-SC-Regular.ttf'
import './fonts/PingFang-SC-Bold.ttf'
import './App.scss'
import 'swiper/css'
import Header from './components/header/Header.tsx'
import Banner from './components/banner/Banner.tsx'
import NavigationBar from './components/navigation-bar/NavigationBar.tsx'
import CardGame from './components/card-game/CardGame.tsx'
import CategoryHot from './components/category-hot/CategoryHot.tsx'
import Footer from './components/footer/Footer.tsx'

function App() {


  return (
    <div className='app'>
      <Header />
      <Banner />
      <div className='block-game'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <NavigationBar />
            </div>
            <div className="col-12 col-md-9">
              <div className='block-game-hot'>
                <div className='d-flex justify-content-between'>
                  <h2>Hot Game</h2>
                  <div className='game-hot-select'>
                    <select name="related-date" className='d-none'>
                      <option>Release Date </option>
                    </select>
                  </div>
                </div>
                <CardGame />
              </div>

              <div className='block-category-hot'>
                <h2>Hottest Category</h2>
                <CategoryHot />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
