import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class DomAbuseTableRow extends Component{

    render(){
        return(
            <tr>
                <td>{this.props.obj.refNo}</td>
                <td>{this.props.obj.complainType}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.status}</td>

                <td>
                    <Button size="sm" variant="info">
                        <Link className="edit-link" to={"/edit/" + this.props.obj._id} style={{ textDecoration: 'none', color: 'white' }}>View</Link>
                    </Button>
                </td>
                <td>
                    <Button size="sm" variant="danger">
                        <Link className="edit-link" to={"/delete/" + this.props.obj._id} style={{ textDecoration: 'none', color: 'white' }}>Delete</Link>
                    </Button>
                </td>
            </tr>
        )
    }

}