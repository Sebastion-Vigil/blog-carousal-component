import React from 'react'

import { Link, Element, Events, scrollSpy } from "react-scroll";

import './BlogCarousal.css'

class BlogCarousal extends React.Component {
    state = {
      blogPosts: [
        'first',
        'second',
        'third',
        'fourth',
        'more'
      ]
    }
    componentDidMount() {
      Events.scrollEvent.register("begin", function () {
        console.log("begin", arguments);
      });
      Events.scrollEvent.register("end", function () {
        console.log("end", arguments);
      });
      scrollSpy.update();
    }
    componentWillUnmount() {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    }
    render() {
        return (
            <div className="blog-carousal flex-col">
              <Element 
                className='thumbnail-section'
                name='first'
                id='containerElement'
              >
                <div className='thumbnail-slide'>
                  {this.state.blogPosts.map((post, i) => {
                    return (
                      <Element 
                        key={i}
                        className='thumbnail'
                        name={this.state.blogPosts[i]}
                      >{post}
                      </Element>
                    )
                  })}
                </div>
              </Element>
              <div className='blog-browse'>
                {this.state.blogPosts.map((post, i) => {
                  return (
                    <Link 
                  key={i}
                  className='blog-select'
                  activeClass='active'
                  to={this.state.blogPosts[i]}
                  spy={true}
                  duration={500}
                  containerId='containerElement'
                ></Link> 
                  )
                })}
              </div>
            </div>
        )
    }
}

export default BlogCarousal