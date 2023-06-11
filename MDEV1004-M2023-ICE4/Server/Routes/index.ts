import express from 'express';
let router = express.Router();

/* GET the movie controller */
import {DisplayMovieList, DisplayMovieByID, AddMovie, updateMovie } from '../Controllers/movie';




router.get('/list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});

router.get('/find/:id', function(req, res, next){
       DisplayMovieByID(req, res, next);
});

router.post('/add', function(req, res, next){
  AddMovie(req, res, next);
})


router.post('/update/:id', function(req, res, next){
  updateMovie(req, res, next);
})

export default router;
