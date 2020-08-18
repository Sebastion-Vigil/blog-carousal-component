import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
    state = {
      blogPosts: [
        'first',
        'second',
        'third',
        'fourth',
        'more'
      ],
      currentPosition: '0%',
      allPositions: [
        '0%',
        '-100%',
        '-200%',
        '-300%',
        '-400%'
      ]
    }
 
    handleBlogSelect = (selected) => {
      const newPosition = this.state.allPositions[selected]
      this.setState({
        currentPosition: newPosition
      })     
    }

    render() {
        return (
            <div className="blog-carousal flex-col">
              <div 
                className='thumbnail-section'
                name='first'
              >
                <div 
                  className='thumbnail-slide'
                  style={{
                    "left": this.state.currentPosition
                  }}
                >
                  {this.state.blogPosts.map((post, i) => {
                    return (
                      <div 
                        className='thumbnail'
                        key={i}
                      >{post}
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
                  onClick={() => this.handleBlogSelect(i)}
                ></div> 
                  )
                })}
              </div>
            </div>
        )
    }
}

export default BlogCarousal