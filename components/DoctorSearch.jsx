import React, { Component } from "react";

class DoctorSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
    };
  }
  search(key) {
    console.warn(key);
    fetch("http://localhost:3000/doctor?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false });
        } else {
          this.setState({
            noData: true,
            searchData: null,
          });
        }
      });
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
          className="w-[450px] rounded-md border-2 border-black p-2 px-5 tracking-widest"
          placeholder="Search by Doctor/Location/Specialist"
        />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.searchData.map((item) => (
                <div className="border-2 p-2 border-black bg-slate-300 font-semibold">name: {item.name} | location:{item.location} | {item.specialist} </div>
              ))}
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No data found</h3> : null}
        </div>
      </div>
    );
  }
}

export default DoctorSearch;