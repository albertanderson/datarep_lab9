import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';   //change url
import Button from 'react-bootstrap/Button'; // delete button
import axios from 'axios';

export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault(); //stops multiple deletes
        console.log("Delete: "+this.props.movie._id); // log movie id to console
        
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>
               <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button> 
                </Card>

            </div>

        );
    }
}