import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase'
// var firebase = require("firebase/app");


// Leave out Storage
//require("firebase/storage");


class ResultPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      noResults: false,
      usefullButton: false,
      showHelpResult: false,
      results: []
      //  { title: 'Мобильный телефон Apple iPhone 6 64GB Space Gray (MG4F2RM/A) СТБ',
      //    price: '1569,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_4_1.jpg',
      //    link: 'http://ultra.by/apple-iphone-6-64gb-space-gray-mg4f2rm-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone SE 16GB Silver (MLLP2RK/A) СТБ',
      //    price: '1049,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_7_55.jpg',
      //    link: 'http://ultra.by/apple-iphone-se-16gb-silver-mllp2-rk-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone SE 64GB Gold (MLXP2RK/A) СТБ',
      //    price: '1199,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_7_56_1.jpg',
      //    link: 'http://ultra.by/apple-iphone-se-64gb-gold-mlxp2-rk-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone 7 128GB Jet Black (MN962RM/A) СТБ',
      //    price: '1949,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_9.12.48_1.png',
      //    link: 'http://ultra.by/apple-iphone-7-128gb-jet-black-mn962.html' },
      //  { title: 'Мобильный телефон Apple iPhone 6 16GB Space Gray (MG472RM/A) СТБ',
      //    price: '1329,01',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_4.jpg',
      //    link: 'http://ultra.by/apple-iphone-6-16gb-space-gray-mg472rm-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone 6 16GB Gold (MG492RM/A) СТБ',
      //    price: '1329,01',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_5.jpg',
      //    link: 'http://ultra.by/apple-iphone-6-16gb-gold-mg492rm-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone SE 16GB Gold (MLXM2RK/A) СТБ',
      //    price: '1049,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_7_56.jpg',
      //    link: 'http://ultra.by/apple-iphone-se-16gb-gold-mlxm2-rk-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone 7 Plus 32GB Black (MNQM2RM/A) СТБ',
      //    price: '2009,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_10.27.11.png',
      //    link: 'http://ultra.by/apple-iphone-7-plus-32gb-black-mnqm2.html' },
      //  { title: 'Мобильный телефон Apple iPhone 6 Plus 16GB Space Gray (MGA82RM/A) СТБ',
      //    price: '1898,89',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_4_46.jpg',
      //    link: 'http://ultra.by/apple-iphone-6-plus-16gb-space-gray-mga82rm-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone 6S 32GB Space Gray (MN0W2RM/A) СТБ',
      //    price: '1529,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_4_3_4.jpg',
      //    link: 'http://ultra.by/apple-iphone-6s-32gb-space-gray.html' },
      //  { title: 'Мобильный телефон Apple iPhone 6S 32GB Gold (MN112RM/A) СТБ',
      //    price: '1529,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_7_31_3.jpg',
      //    link: 'http://ultra.by/apple-iphone-6s-32gb-gold-mn112rm-a.html' },
      //  { title: 'Мобильный телефон Apple iPhone 7 Plus 32GB Silver (MNQN2RM/A) СТБ',
      //    price: '2009,00',
      //    img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //    link: 'http://ultra.by/apple-iphone-7-plus-32gb-silver-mnqn2.html' },
      //  { title: '',
      //      price: '2009,00',
      //      img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //      link: 'http://ultra.by/apple-iphone-7-plus-32gb-silver-mnqn2.html' },
      //      { title: 'dhfbhrtfgfhnfgyhxjx',
      //          price: '',
      //          img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //          link: 'http://ultra.by/apple-iphone-7-plus-32gb-silver-mnqn2.html' },
      //          { title: 'fgyhncyhgnhm',
      //              price: '2009,00',
      //              img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //              link: '' },
      //              { title: 'fgyhncyhgnhm',
      //                  price: '2009,00',
      //                  img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //                  link: 'hxrtghxxryjh' },
      //                  { title: 'fgyhncyhgnhm',
      //                      price: '200,00',
      //                      img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //                      link: 'hxrtghxxryjh' },
      //                      { title: 'fgyhncyhgnhm',
      //                          price: undefined,
      //                          img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/_/2/_2016-09-08_11.46.04.png',
      //                          link: 'hxrtghxxryjh' },
      //                          { title: 'Мобильный телефон Apple iPhone 6 64GB Space Gray (MG4F2RM/A) СТБ',
      //                            price: '1569,00',
      //                            img: 'http://ultra.by/media/catalog/product/cache/1/small_image/218x170/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_4_1.jpg',
      //                            link: 'http://ultra.by/apple-iphone-6-64gb-space-gray-mg4f2rm-a.html' }
      //   ]
    }
  }
  componentDidMount() {
      // firebase.database().ref('numberYes/-KkCdYa0bH0A0Os_W5wG').update({ count: 10, visited: 10 })
      const { visited } = this.state
      firebase.database().ref('numberYes/-KkCdYa0bH0A0Os_W5wG').once('value')
      .then(snapshot => {
      const object = snapshot.val()
      if (object !== null) {
        const visited = object.visited
        const newVisited = Number(visited) + 1
        this.setState({ visited : newVisited })
      }
      })
        .then(() => {
        firebase.database().ref('numberYes/-KkCdYa0bH0A0Os_W5wG').update({ visited: this.state.visited })
      })


    const { query } = this.props.location.query
    axios.get(`https://simple-shop.ml/search`, {params: {query}})
    .then(response => {
      this.filterResults(response.data.results)
      // console.log(response.data.results)
    }
  )
}

filterResults (results) {
  const { query } = this.props.location.query
  const percent = 0.2
  const newResults = results.filter((item, i) => (
    (item.price !== '') && (item.price !== undefined) &&
    (item.title !=='') && (item.title !== undefined) &&
    (item.link !== '') && (item.link !== undefined)

  ))
  console.log(newResults,'newResults')
  const queryArray = query.split(' ')
  const resultsWithName = newResults.filter((item, i) => {
    return queryArray.every(word => item.title.toLowerCase().includes(word.toLowerCase()))
    // console.log((item.title.toLowerCase(), query.toLowerCase()))
  })
  // console.log(resultsWithName,'resultsWithName')
  const priceArray = resultsWithName.map((item) => item = parseFloat(item.price))
  // console.log(priceArray,'priceArray')
  const totalPrice = priceArray.reduce(function(a, b) { return a + b })
  const roundTotalPrice = Math.round(totalPrice)
  // console.log(totalPrice,'totalPrice')

  const filteredResults = resultsWithName.filter((item, i) => {
    return (parseFloat(item.price) > (roundTotalPrice * percent/resultsWithName.length) )
    // console.log(parseFloat(item.price), (totalPrice * percent/newResults.length))
  })


  filteredResults.sort( (a, b) => {
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1;
    }
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1;
    }
    return 0;
  })
  // console.log(filteredResults,'filteredResults')
  const first16Results = filteredResults.slice(0,16)
  this.setState({ results: first16Results })
}

renderResults () {
  const { results } = this.state
  // console.log(results)

  return results.map((item, i) =>
  <div key={i}>
    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img src={item.img} style={{ height: '200px' }} />
        <div className="caption">
          <h3 style={{ height: '150px' }} >{item.title}</h3>
          <h5>{item.name}</h5>
          <h3>{item.price} p</h3>
          <p><a href={item.link} className="btn btn-primary" target="_blank" role="button">В магазин</a>
           {/* <a href="#" className="btn btn-default" role="button">Cравнить</a> */}
        </p>
        </div>
      </div>
    </div>
  </div>
)
}
wasUseful () {
  const { count } = this.state
  firebase.database().ref('numberYes/-KkCdYa0bH0A0Os_W5wG').once('value')
  .then(snapshot => {
  const object = snapshot.val()
  if (object !== null) {
    const count = object.count
      const newCount = Number(count) + 1
    this.setState({ count : newCount , showHelpResult: true })
  }
  })
    .then(() => {
    firebase.database().ref('numberYes/-KkCdYa0bH0A0Os_W5wG').update({ count: this.state.count })
  })
}


renderWasUsefulButton(){
    const { count, showHelpResult, visited } = this.state
    const isA = (count !== 12 && count !== 14 && count !== 112 && count !== 114 && count !== 212 && count !== 214
      && (count % 10 == 2 || count % 10 == 4))
    const times = isA ? 'раза' : 'раз'
  return (
    <div className="col-sm-12 col-md-12" style={{ paddingBottom: '5px'  }}>


{!showHelpResult && <div>
  <h4 style={{ paddingBottom: '5px'  }}>Просто помог?</h4>
    <button
        style={{ paddingTop: '5px', paddingBottom: '5px'  }}
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => {this.wasUseful()}}>
        Да
      </button>
    </div>}
    {!!showHelpResult &&<div>
      <h4 style={{ paddingBottom: '5px'  }}>Просто помог уже {count} {times} </h4>
      <h5 style={{ paddingBottom: '5px'  }}>Просто посетили {visited} {times} </h5>
</div>}
    </div>
)
}


render() {
  const { query } = this.props.location.query
  const { results, noResults, usefullButton } = this.state
  // console.log(results)
  const isloading = false
  // (results.length === 0)
  setTimeout(() => { this.setState({ noResults: true, isloading: false })}, 10000)
  setTimeout(() => {this.setState({ usefullButton: true })}, 4000)
  // console.log(isloading)
  return (
    <div className="container">
      <h3 style={{ paddingTop: '50px', paddingBottom: '30px'  }}>Результаты для {query} </h3>
      {!!isloading && !noResults && <div className="col-sm-6 col-md-12"> Идет поиск...</div> }
      {!isloading && !!usefullButton && this.renderWasUsefulButton()}
      {!isloading && this.renderResults()}
      {!!noResults && !!isloading && <div className="col-sm-6 col-md-12"> К сожалению, ничего не найдено. Попробуйте изменить запрос</div> }
    </div>
  );
}
}

export default ResultPage;
