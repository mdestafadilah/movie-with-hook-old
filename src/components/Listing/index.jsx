import React, { Component } from "react";
import SlideList from "./SlideList";
import BoxList from "./BoxList";
import Loading from "../Loading/Loading";
import Error from "../Error";
import API from "../API/request";
import "./Listing.css";

export default class index extends Component {
  state = {
    list: [],
    message: "",
  };
  page = 0;
  showedAll = false;
  loading = false;

  loaded = (data) => {
    this.endLoading();
    const formatedData = this.formatFilm(data.results);
    this.setState({ list: [...this.state.list, formatedData] });
    if (data.length === 0) this.showedAll = true;
  };

  fail = (error) => {
    this.endLoading();
    if (this.page === 0) this.setState({ message: <Error /> });
  };

  more = () => {
    if (this.showedAll || this.loading) return;
    this.startLoading();
    this.page++;
    API.request(
      this.props.type,
      this.props.query,
      this.page,
      this.loaded,
      this.fail
    );
  };

  startLoading = () => {
    this.loading = true;
    this.setState({ message: <Loading /> });
  };

  endLoading = () => {
    this.loading = false;
    this.setState({ message: "" });
  };

  formatFilm = (data) => {
    return data.map((item, index) => {
      const backgroundImage = "url(" + API.poster(item.poster_path, 200) + ")";
      const title = item.poster_path ? "" : <p>{item.title}</p>;
      return (
        <div className="item" key={index} style={{ backgroundImage }}>
          {title}
        </div>
      );
    });
  };

  componentDidMount() {
    this.more();
  }

  render() {
    const listing = this.props.slide ? (
      <SlideList list={this.state.list} query={this.props.query} />
    ) : (
      <BoxList list={this.state.list} more={this.more} />
    );
    return <div>{listing}</div>;
  }
}