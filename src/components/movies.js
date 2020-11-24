import React from 'react';
import { MovieItem } from './movieItem';


export class Movies extends React.Component{

    render(){
        return this.props.movies.map( (movie)=>{  //map break them apart
            return <MovieItem key={movie._id} movie={movie} ReloadData={this.props.ReloadData}></MovieItem>

        })
            

    }
}