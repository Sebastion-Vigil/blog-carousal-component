import React from 'react'

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
    state  = {
        blogTiles: [
            'first',
            'second',
            'third',
            'fourth',
            'all blogs'
        ]
    }
    render() {
        return (
            <div className="blog-carousal flex">
              <div className='blog-thumbnails'>
                {this.state.blogTiles.map((blogTile) => {
                  return (
                      <div className='thumbnail flex'>
                        {blogTile}
                      </div>
                  )
                })}
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