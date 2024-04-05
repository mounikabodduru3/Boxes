const Box = props => {
  //  Write your code here.
  const {className, text} = props

  return <div className={`${className}`}>{text}</div>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className = "box-container">
      <Box className='small-box' text='Small' />
      <Box className='medium-box' text='Medium' />
      <Box className='large-box' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
