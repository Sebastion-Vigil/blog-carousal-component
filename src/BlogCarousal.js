import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
  state = {
    blogPosts: ['first', 'second', 'third', 'fourth', 'see more'],
    currentPosition: '0%',
    allPositions: ['0%', '-100%', '-200%', '-300%', '-400%'],
    slideTimer: undefined,
    slideActive: false
  }

  stopSlideTimer = () => {
      clearInterval(this.state.slideTimer)
      this.setState({
          slideActive: false
      })
  }

  handleBlogSelect = selected => {
    if (this.state.slideActive) return
    const targetPosition = parseInt(selected)
    let currentPosition = parseInt(this.state.currentPosition)
    if (currentPosition === targetPosition) return
    this.setState({
      slideActive: true,
      slideTimer: setInterval(() => {
        targetPosition > currentPosition ? ++currentPosition : --currentPosition
        if (currentPosition === targetPosition) {
          this.stopSlideTimer()
        }
        this.setState({
          currentPosition: currentPosition.toString() + '%'
        })
      }, 0)
    })
  }

  render () {
    return (
      <div className='blog-carousal'>
        <div className='carousal'>
          <div className='thumbnail-section'>
            <div
              className='thumbnail-slide'
              style={{
                left: this.state.currentPosition
              }}
            >
              {this.state.blogPosts.map((post, i) => {
                return (
                  <div 
                    className='thumbnail'
                    key={i}
                  >
                    {post}
                  </div>
                )
              })}
            </div>
          </div>
          <div className='user-select'>
            {this.state.allPositions.map((post, i) => {
              return (
                <div
                  className='select-button'
                  key={i}
                  onClick={() =>
                    this.handleBlogSelect(this.state.allPositions[i])
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
