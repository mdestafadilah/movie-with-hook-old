import React from "react";

class BoxList extends React.Component {
  scrolled = () => {
    const bodyElement = document.body;
    const windowHeight = window.innerHeight;
    const bodyScrollHeight = window.scrollY;
    const bodyHeight = bodyElement.scrollHeight;
    if (
      windowHeight + bodyScrollHeight >
      bodyHeight - Math.round(windowHeight / 2)
    )
      this.props.more();
  };

  componentDidUpdate() {
    this.scrolled();
  }

  componentDidMount() {
    window.addEventListerner("scroll", this.scrolled);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrolled);
  }

  render() {
    return <div className="box">{this.props.list}</div>;
  }
}

export default BoxList;
