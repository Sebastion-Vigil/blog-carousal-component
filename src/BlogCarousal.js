import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
    state = {
      blogPosts: [
        'first',
        'second',
        'third',
        'fourth',
        'see more'
      ]
    }
    render() {
        return (
            <div className="blog-carousal flex-col">
              <div className='thumbnail-section'>
                <div className='thumbnail-slide'>
                  {this.state.blogPosts.map((post) => {
                    return (
                      <div className='thumbnail'>{post}</div>
                    )
                  })}
                </div>
              </div>
              <div className='blog-browse'>
                <div className='blog-select'></div> 
                <div className='blog-select'></div> 
                <div className='blog-select'></div> 
                <div className='blog-select'></div>
                <div className='blog-select'></div>
              </div>
            </div>
        )
    }
}

export default BlogCarousal