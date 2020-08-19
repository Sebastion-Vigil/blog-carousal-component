import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
  state = {
    blogPosts: ['first', 'second', 'third', 'fourth', 'more'],
    currentPosition: '0%',
    allPositions: ['0%', '-100%', '-200%', '-300%', '-400%'],
    slideTimer: undefined
  }

  handleBlogSelect = selected => {
    const targetPosition = parseInt(selected)
    let currentPosition = parseInt(this.state.currentPosition)
    if (currentPosition === targetPosition) return
    this.setState({
      slideTimer: setInterval(() => {
        targetPosition > currentPosition ? ++currentPosition : --currentPosition
        if (currentPosition === targetPosition) {
          clearInterval(this.state.slideTimer)
        }
        this.setState({
          currentPosition: currentPosition.toString() + '%'
        })
      })
    })
  }

  render () {
    return (
      <div className='blog-carousal flex-col'>
        <div className='thumbnail-section' name='first'>
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
        <div className='blog-browse'>
          {this.state.blogPosts.map((post, i) => {
            return (
              <div
                className='blog-select'
                key={i}
                onClick={() => this.handleBlogSelect(this.state.allPositions[i])}
              ></div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BlogCarousal
