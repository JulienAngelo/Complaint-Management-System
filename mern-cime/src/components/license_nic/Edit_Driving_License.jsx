import React, { Component } from "react";

import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";

// import DatePicker from "react-datepicker";

import axios from 'axios';

export default class EditOnlineDriving extends Component {

  constructor(props) {
    super(props);

    this.onchangeRefno = this.onchangeRefno.bind(this);
    this.onchangeName = this.onchangeName.bind(this);
    this.onchangeNic = this.onchangeNic.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this);
    this.onchangeGramaNiladhari = this.onchangeGramaNiladhari.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      refNo: "",
      name: "",
      nic: "",
      address: "",
      phone: "",
      description: "",
      date: "",
      officer_incharge: "",
      grama_niladhari: "",
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/license/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          refNo: response.data.refNo,
          name: response.data.name,
          nic: response.data.nic,
          address: response.data.address,
          phone: response.data.phone,
          description: response.data.description,
          date: response.data.date,
          officer_incharge: response.data.officer_incharge,
          grama_niladhari: response.data.grama_niladhari,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onchangeRefno(e) {
    this.setState({
      refNo: e.target.value,
    });
  }

  onchangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onchangeNic(e) {
    this.setState({
      nic: e.target.value,
    });
  }

  onchangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onchangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onchangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onchangeOfficerIncharge(e) {
    this.setState({
      officer_incharge: e.target.value,
    });
  }

  onchangeGramaNiladhari(e){
    this.setState({
      grama_niladhari: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const complain = {
      refNo: this.state.refNo,
      name: this.state.name,
      nic: this.state.nic,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      date: this.state.date,
      officer_incharge: this.state.officer_incharge,
      grama_niladhari: this.state.grama_niladhari,
    };

    axios.post('http://localhost:5000/license/update/' + this.props.match.params.id, complain)
    .then(res => console.log(res.data));

    console.log(complain);

    window.location = '/viewlost'

  }

  render() {
    return (

        <div style={{ marginTop: -7 + "rem" }}>

<OnlineDrivingNICRenewalNavbar />


          <div class="container" style={{ marginTop: 1 + "rem" }}>
            <div class="card text-danger  bg-dark  mb-3">
              <div class="card-header">
                <h3>Driving License Lost</h3>
              </div>
              <div class="card-body"></div>

              <div class="container">

              <form
                  style={{ margin: "auto" }}
                  onSubmit={this.onSubmit}
                >
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>RefNo:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onchangeName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>NIC Number :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.onchangeNic}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Address:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onchangeAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Phone: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onchangePhone}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Description: </b>
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onchangeDescription}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date: </b>
                    </label>
                    <div></div>
                    <DatePicker
                      className="form-control"
                      selected={this.state.date}
                      className="form-control is-invalid"
                      onChange={this.onchangeDate}
                    />
                  </div> */}

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Officer Incharge:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.officer_incharge}
                      onChange={this.onchangeOfficerIncharge}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Grama Niladhari Division:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.grama_niladhari}
                      onChange={this.onchangeGramaNiladhari}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      onSubmit={this.onsubmit}
                      style={{ marginLeft: 0.5 + "rem" }}
                      value="Submit"
                      className="btn btn-outline-danger btn btn-dark"
                    />
                  </div>
             
                </form> 

              </div>
            </div>
          </div>

        </div>

    );
  }
}
