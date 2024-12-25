const element = (
  <div className='bg-container'>
    <h1 className='heading'>Super OverLeague</h1>
    <div className='d-flex flex-column justify-content-center'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='img-size'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='img-size'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
