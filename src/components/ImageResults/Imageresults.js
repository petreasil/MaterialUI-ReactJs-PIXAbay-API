import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Fingerprint from "material-ui/svg-icons/action/fingerprint";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Imageresults extends Component {
  state = {
    open: false,
    currentImage: ""
  };
  handleOpen = img => {
    this.setState({
      open: true,
      currentImage: img
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    let imageListContent;
    const { images } = this.props;
    console.log(images);

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <Fingerprint color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="imagebla" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="close" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img
            src={this.state.currentImage}
            alt="23"
            style={{ width: "100%" }}
          />
        </Dialog>
      </div>
    );
  }
}

Imageresults.propTypes = {
  images: PropTypes.array.isRequired
};

export default Imageresults;
