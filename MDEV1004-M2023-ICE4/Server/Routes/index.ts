import express from 'express';
let router = express.Router();

/* GET the movie controller */
import {DisplayMovieList} from '../Controllers/movie';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movie-list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});
export default router;
