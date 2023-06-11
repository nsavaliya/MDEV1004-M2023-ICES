import { Request, Response, NextFunction } from 'express';
import Movie from '../Models/movie';

export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void
{
    
    Movie.find({})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(err){
        console.error(err);
    });
}


export function DisplayMovieByID(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
   Movie.findById({_id: id})
   .then(function(data)
   {
        res.status(200).json(data)
   })
   .catch(function(err)
   {
    console.error(err);
   });
}



export function AddMovie(req: Request, res: Response, next: NextFunction): void
{

    let movie = new Movie({
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: req.body.genres,
        directors: req.body.directors,
        writers: req.body.writers,
        actors: req.body.actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating
    });

   Movie.create(movie)
   .then(function()
   {
        res.json(movie)
   })
   .catch(function(err)
   {
    console.error(err);
   });

   Movie.create()
}