import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render(){
    const { photoIndex, isOpen } = this.state
    const { images } = this.props
    console.log("images", images)
    return(<div>
      <img
        style={{ maxWidth: "100%", height: "200px", width: "310px" }}
        alt=""
        src={"http://localhost:3000/" + images[0]}
        onClick={() => this.setState({ isOpen: true })}
      />

      {isOpen && (
        <Lightbox
          mainSrc={"http://localhost:3000/" + images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
          }
        />
      )}
    </div>
  )
}

}