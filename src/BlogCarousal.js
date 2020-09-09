import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
  state = {
    blogPosts: ['first', 'second', 'third', 'fourth', 'see more'],
    currentPosition: '0%',
    allPositions: ['0%', '-100%', '-200%', '-300%', '-400%'],
    slideTimer: undefined,
    slideActive: false,
    buttonColors: [
      'white',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)'
    ]
  }

  stopSlideTimer = () => {
    clearInterval(this.state.slideTimer)
    this.setState({
      slideActive: false
    })
  }

  handleBlogSelect = (selected, index) => {
    const targetPosition = parseInt(selected)
    let currentPosition = parseInt(this.state.currentPosition)
    const buttonColors = [
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)',
      'rgb(83, 78, 78)'
    ]
    buttonColors[index] = 'white'
    if (currentPosition === targetPosition) return
    if (this.state.slideActive) return
    this.setState({
      slideActive: true,
      slideTimer: setInterval(() => {
        targetPosition > currentPosition ? ++currentPosition : --currentPosition
        if (currentPosition === targetPosition) {
          this.stopSlideTimer()
        }
        this.setState({
          currentPosition: currentPosition.toString() + '%',
          buttonColors: buttonColors
        })
      }, 0)
    })
  }

  render () {
    return (
      <div className='blog-carousal'>
        <div className='carousal'>
          <div className='laptop'>
            <div className='thumbnail-section'>
              <div
                className='thumbnail-slide'
                style={{
                  left: this.state.currentPosition
                }}
              >
                {this.state.blogPosts.map((post, i) => {
                  return (
                    <div className='thumbnail' key={i}>
                      {post}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='user-select'>
            {this.state.allPositions.map((position, i) => {
              return (
                <div
                  className='select-button'
                  key={i}
                  style={{
                    backgroundColor: this.state.buttonColors[i]
                  }}
                  onClick={() =>
                    this.handleBlogSelect(position, i)
                  }
                ></div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogCarousal
