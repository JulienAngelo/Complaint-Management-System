import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import axios from 'axios';
import $ from 'jquery'
export default class CreateLEF extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this);
        this.onchangeDateOfIssue = this.onchangeDateOfIssue.bind(this);
        this.onchangeVictimFullName = this.onchangeVictimFullName.bind(this);
        this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this);
        this.onchangeAge = this.onchangeAge.bind(this);
        this.onchangeAdmission = this.onchangeAdmission.bind(this);
        this.onchangeHospital = this.onchangeHospital.bind(this);
        this.onchangeWardNo = this.onchangeWardNo.bind(this);
        this.onchangeDate = this.onchangeDate.bind(this);
        this.onchangeDateOfDischarge = this.onchangeDateOfDischarge.bind(this);
        this.onchangeRegistrationNumber = this.onchangeRegistrationNumber.bind(this);
        this.onchangeNomineeName = this.onchangeNomineeName.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onchangeReason = this.onchangeReason.bind(this);
        this.onchangeRank = this.onchangeRank.bind(this);
        this.onchangeNatureOfBodilyHarm = this.onchangeNatureOfBodilyHarm.bind(this);
        //this.onchangeWeapon = this.onchangeWeapon.bind(this);
        // this.onchangeCategoryOfHurt = this.onchangeCategoryOfHurt.bind(this);
        // this.onchangeConsumptionOfAlcohol = this.onchangeConsumptionOfAlcohol.bind(this);
        // this.onchangeOther = this.onchangeOther.bind(this);
        this.onchangeRemarks = this.onchangeRemarks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            refNo: '',
            dateOfIssue: new Date(),
            victimFullName: '',
            dateOfBirth: new Date(),
            age: new Number(),
            admission: '',
            hospital: '',
            wardNo: '',
            date: new Date(),
            dateOfDischarge: new Date(),
            registrationNumber: new Number(),
            nomineeName: '',
            address: '',
            reason: '',
            rank: '',
            natureOfBodilyHarm: '',
            //  weapon: '',
            // categoryOfHurt: '',
            // consumptionOfAlcohol: '',
            //  other: '',
            remarks: ''
        }

    }


    onchangeRefno(e) {
        this.setState({
            refNo: e.target.value
        });
    }

    onchangeDateOfIssue(date) {
        this.setState({
            dateOfIssue: date
        });
    }

    onchangeVictimFullName(e) {
        this.setState({
            victimFullName: e.target.value
        });
    }

    onchangeDateOfBirth(date) {
        this.setState({
            dateOfBirth: date
        });
    }

    onchangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onchangeAdmission(e) {
        this.setState({
            admission: e.target.value
        });
    }

    onchangeHospital(e) {
        this.setState({
            hospital: e.target.value
        });
    }

    onchangeWardNo(e) {
        this.setState({
            wardNo: e.target.value
        });
    }

    onchangeDateOfDischarge(date) {
        this.setState({
            dateOfDischarge: date
        });
    }
    ////
    /* onchangeWeapon(e) {
         this.setState({
             weapon: e.target.value
         });
     }*/

    onchangeDate(date) {
        this.setState({
            date: date
        });
    }

    onchangeRegistrationNumber(e) {
        this.setState({
            registrationNumber: e.target.value
        });
    }

    onchangeNomineeName(e) {
        this.setState({
            nomineeName: e.target.value
        });
    }

    onchangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onchangeReason(e) {
        this.setState({
            reason: e.target.value
        });
    }

    onchangeRank(e) {
        this.setState({
            rank: e.target.value
        });
    }

    onchangeNatureOfBodilyHarm(e) {
        this.setState({
            natureOfBodilyHarm: e.target.value
        })
    }

    /* onchangeCategoryOfHurt(e) {
         this.setState({
             categoryOfHurt: e.target.value
         })
     }
 
     onchangeConsumptionOfAlcohol(e) {
         this.setState({
             consumptionOfAlcohol: e.target.value
         })
     }
 
     onchangeOther(e) {
         this.setState({
             other: e.target.value
         })
     }*/

    onchangeRemarks(e) {
        this.setState({
            remarks: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            refNo: this.state.refNo,
            dateOfIssue: this.state.dateOfIssue,
            victimFullName: this.state.victimFullName,
            dateOfBirth: this.state.dateOfBirth,
            age: Number(this.state.age),
            admission: this.state.admission,
            hospital: this.state.hospital,
            wardNo: this.state.wardNo,
            date: this.state.date,
            dateOfDischarge: this.state.dateOfDischarge,
            registrationNumber: Number(this.state.registrationNumber),
            nomineeName: this.state.nomineeName,
            address: this.state.address,
            rank: this.state.rank,
            natureOfBodilyHarm: this.state.natureOfBodilyHarm,
            // weapon: this.state.weapon,
            // categoryOfHurt: this.state.categoryOfHurt,
            //  consumptionOfAlcohol: this.state.consumptionOfAlcohol,
            //other: this.state.other,
            remarks: this.state.remarks,
        };
        console.log(obj)
        axios.post('http://localhost:5000/lef/add', obj).then(res => console.log(res.data));

        this.setState({
            refNo: '',
            dateOfIssue: new Date(),
            victimFullName: '',
            dateOfBirth: new Date(),
            age: new Number(),
            admission: '',
            hospital: '',
            wardNo: '',
            date: new Date(),
            dateOfDischarge: new Date(),
            registrationNumber: new Number(),
            nomineeName: '',
            address: '',
            reason: '',
            rank: '',
            natureOfBodilyHarm: '',
            // weapon: '',
            //categoryOfHurt: '',
            //consumptionOfAlcohol: '',
            //other: '',
            remarks: ''
        })

    }


    render() {
        return (

            <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                <TabList >
                    <div class="tab text-danger">
                        <Tab style={{ marginLeft: 20 + 'rem' }}><b>Police Station Details</b></Tab>
                        <Tab ><b>Medical Officer Details</b></Tab>
                        <Tab ><b>Examinee Details</b></Tab>
                        <Tab ><b>Examinee Details part 2</b></Tab>
                    </div>
                </TabList>

                <div className="container" style={{ marginTop: 1 + 'rem' }}>

                    <div className="card text-white bg-dark" style={{ marginLeft: 8.5 + 'rem' }} >
                        <div className="container">
                            <form onSubmit={this.onSubmit} style={{ margin: "auto" }} className=" needs-validation" noValidate={true}>
                                <TabPanel>
                                    <div className="card-header bg-dark"><h3>Police Station Details</h3></div>
                                    <div className="form-group" >
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Reference Number:</b></label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control is-invalid"
                                            value={this.state.refNo}
                                            onChange={this.onchangeRefno} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>dateOfIssue: </b></label>
                                        <div></div>
                                        <DatePicker
                                            className="form-control is-invalid"
                                            selected={this.state.dateOfIssue}
                                            onChange={this.onchangeDateOfIssue} />

                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>victim Full Name: </b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.victimFullName}
                                            onChange={this.onchangeVictimFullName} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth: </b></label>
                                        <div>
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.dateOfBirth}
                                                onChange={this.onchangeDateOfBirth} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Age :</b></label>
                                        <input type="number"
                                            required
                                            value={this.state.age}
                                            className="form-control is-invalid"
                                            onChange={this.onchangeAge} />
                                    </div>
                                </TabPanel>
                                <TabPanel>

                                    <div className="card-header bg-dark"><h3>Medical Officer Details</h3></div>

                                    <div className="form-group" >

                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Admission:</b></label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control is-invalid"
                                            value={this.state.admission}
                                            onChange={this.onchangeAdmission} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Hospital: </b></label>
                                        <div></div>
                                        <input
                                            required
                                            type="text"
                                            className="form-control is-invalid"
                                            value={this.state.hospital}
                                            onChange={this.onchangeHospital} />

                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Ward No: </b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.wardNo}
                                            onChange={this.onchangeWardNo} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date : </b></label>
                                        <div>
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.date}
                                                onChange={this.onchangeDate} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date of Discharge :</b></label>
                                        <div>
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.dateOfDischarge}
                                                onChange={this.onchangeDateOfDischarge} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="card-header bg-dark"><h3>Examinee Details</h3></div>

                                    <div className="form-group" >

                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Registration Number :</b></label>
                                        <input
                                            required
                                            type="number"
                                            className="form-control is-invalid"
                                            value={this.state.registrationNumber}
                                            onChange={this.onchangeRegistrationNumber} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Nominee’s Name : </b></label>
                                        <div></div>
                                        <input
                                            required
                                            type="text"
                                            className="form-control is-invalid"
                                            value={this.state.nomineeName}
                                            onChange={this.onchangeNomineeName} />

                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address: </b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.address}
                                            onChange={this.onchangeAddress} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Reason : </b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.reason}
                                            onChange={this.onchangeReason} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Rank  :</b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.rank}
                                            onChange={this.onchangeRank} />
                                    </div>

                                    <div className="form-group">

                                        <select
                                            onClick = {this.handle}
                                            className="mdb-select md-form colorful-select dropdown-danger"
                                            value={this.state.natureOfBodilyHarm}
                                            onChange={this.onchangeNatureOfBodilyHarm}
                                        >
                                            <option>Abrasion</option>
                                            <option>Cut</option>
                                            <option>Bite</option>
                                            <option>Contusion</option>
                                            <option>Fractured</option>
                                            <option>Dislocation</option>
                                            <option>Laceration</option>
                                            <option>Firearm Injury</option>
                                            <option>Explosive Injury</option>
                                            <option>Stab</option>
                                            <option>Burns</option>
                                            <option>Other</option>
                                            <option>None</option>

                                        </select>


                                        {/*<label style={{ marginLeft: 0.5 + 'rem' }}><b>Nature of Bodily Harm :</b></label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        name="natureOfBodilyHarm"
                                                        value="Abrasion"
                                                        checked={this.state.value === "Abrasion"}
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Abrasion </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Cut"
                                                        name="natureOfBodilyHarm"
                                                        value="Cut"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Cut </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Bite"
                                                        name="natureOfBodilyHarm"
                                                        value="Bite"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Bite </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Contusion"
                                                        name="natureOfBodilyHarm"
                                                        value="Contusion"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Contusion </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Fracture"
                                                        name="natureOfBodilyHarm"
                                                        value="Fracture"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Fracture </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Dislocation"
                                                        name="natureOfBodilyHarm"
                                                        value="Dislocation"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Dislocation </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Laceration"
                                                        name="natureOfBodilyHarm"
                                                        value="Laceration"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Laceration </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Firearm Injury"
                                                        name="natureOfBodilyHarm"
                                                        value="Firearm Injury"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Firearm Injury </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Explosive Injury"
                                                        name="natureOfBodilyHarm"
                                                        value="Explosive Injury"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Explosive Injury </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Stab"
                                                        name="natureOfBodilyHarm"
                                                        value="Stab"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Stab </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Burns"
                                                        name="natureOfBodilyHarm"
                                                        value="Burns"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Burns </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Other"
                                                        name="natureOfBodilyHarm"
                                                        value="Other"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Other </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="None"
                                                        name="natureOfBodilyHarm"
                                                        value="None"
                                                        onChange={this.onchangeNatureOfBodilyHarm} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>None </b></label>
                                                </div>
                                            </div>
        </div>*/}
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="card-header bg-dark"><h3>Examinee Details part 2</h3></div>
                                    <div className="form-group">
                                        {/*  <label style={{ marginLeft: 0.5 + 'rem' }}><b>Weapon :</b></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Blunt"
                                                        name="Weapon"
                                                        value="Blunt"
                                                        onChange={this.onchangeWeapon} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Blunt </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Sharp"
                                                        name="Weapon"
                                                        value="Sharp"
                                                        onChange={this.onchangeWeapon} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Sharp </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Firearm"
                                                        name="Weapon"
                                                        value="Firearm"
                                                        onChange={this.onchangeWeapon} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Firearm </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Explosive device"
                                                        name="Weapon"
                                                        value="Explosive device"
                                                        onChange={this.onchangeWeapon} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Explosive device </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Others"
                                                        name="Weapon"
                                                        value="Others"
                                                        onChange={this.onchangeWeapon} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Others </b></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Category Of Hurt :</b></label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Non Grievous"
                                                        name="hurt"
                                                        value="Non Grievous"
                                                        onChange={this.onchangeCategoryOfHurt} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Non Grievous </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Grievous"
                                                        name="hurt"
                                                        value="Grievous"
                                                        onChange={this.onchangeCategoryOfHurt} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Grievous </b></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Fatal"
                                                        name="hurt"
                                                        value="Fatal"
                                                        onChange={this.onchangeCategoryOfHurt} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Fatal </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Does It Endanger life?"
                                                        name="hurt"
                                                        value="Does It Endanger life?"
                                                        onChange={this.onchangeCategoryOfHurt} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Does It Endanger life? </b></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Consumption Of Alcohol:</b></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Breathing/Smelling"
                                                        name="Alcohol"
                                                        value="Breathing/Smelling"
                                                        onChange={this.onchangeConsumptionOfAlcohol} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Breathing / Smelling </b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Under Influence"
                                                        name="Alcohol"
                                                        value="Under Influence"
                                                        onChange={this.onchangeConsumptionOfAlcohol} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Under Influence</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Negative"
                                                        name="Alcohol"
                                                        value="Negative"
                                                        onChange={this.onchangeConsumptionOfAlcohol} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Negative</b></label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Other:</b></label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Signs Of Vaginal/Hymen Penetration Present"
                                                        name="Other"
                                                        value="Signs Of Vaginal/Hymen Penetration Present"
                                                        onChange={this.onchangeOther} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Signs Of Vaginal/Hymen Penetration Present</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Signs Of Anal Penetration"
                                                        name="Other"
                                                        value="Signs Of Anal Penetration"
                                                        onChange={this.onchangeOther} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Signs Of Anal Penetration</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Signs Consistent With Inter Labial Penetration Present"
                                                        name="Other"
                                                        value="Signs Consistent With Inter Labial Penetration Present"
                                                        onChange={this.onchangeOther} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Signs Consistent With Inter Labial Penetration Present</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Investigations"
                                                        name="Other"
                                                        value="Investigations"
                                                        onChange={this.onchangeOther} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Investigations</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div style={{ marginLeft: 0.5 + 'rem' }}>
                                                    <input type="radio"
                                                        id="Other"
                                                        name="Other"
                                                        value="Other"
                                                        onChange={this.onchangeOther} />
                                                    <label style={{ marginLeft: 0.3 + 'rem' }} className="text-primary"><b>Other</b></label>
                                                </div>
                                            </div>
    </div>*/}


                                    </div>
                                    <div className="form-group">
                                        <label style={{ marginLeft: 0.5 + 'rem' }}><b>Remarks :</b></label>
                                        <input type="text"
                                            required
                                            className="form-control is-invalid"
                                            value={this.state.remarks}
                                            onChange={this.onchangeRemarks} />
                                    </div>


                                    <div className="form-group">
                                        <input type="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                                    </div>
                                </TabPanel>


                            </form>
                        </div >
                    </div >
                </div >

            </Tabs>


        )


    }
   /* handle = () => {
        $(document).ready(function () {
            $('.mdb-select').materialSelect();
        })
    };*/
}



