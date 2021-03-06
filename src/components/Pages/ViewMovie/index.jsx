import React from "react";
import API from "../../API/request";
import Button from "../../Button";
import Error404 from "../Error404";
import "./ViewMovie.css";

class ViewMovie extends React.Component {
  state = {
    title: "",
    description: "",
    tagas: "",
    poster: "",
    message: "",
  };

  loaded(data) {
    if (!data.title) this.setState({ message: <Error404 /> });
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(" + API.poster(data.backdrop_path, 500) + ")";
    this.setState({
      title: data.title,
      description: data.overview,
      tagas: data.genres.map((t, index) => <span key={index}>{t.name}</span>),
      poster: API.poster(data.poster_path, 500),
    });
  }

  componentDidMount() {
    API.request(
      "DETAIL",
      this.props.match.params.id,
      1,
      this.loaded.bind(this),
      this.loaded.bind(this)
    );
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url()";
  }

  render() {
    return (
      <div>
        {this.state.message ? (
          this.state.message
        ) : (
          <div className="filmDetail" id="filmDetail">
            <h1>{this.state.title}</h1>
            <div className="filmDetailBox">
              <div className="info">
                <div className="text">
                  <p>{this.state.description}</p>
                  <p className="tags">{this.state.tags}</p>
                  <p className="playbutton">
                    <Button
                      to={"/movie/" + this.props.match.params.id + "/play"}
                    >
                      Play
                    </Button>
                  </p>
                </div>
              </div>
              <div className="poster">
                <img src={this.state.poster} alt={this.state.title} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ViewMovie;
