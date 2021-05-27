const db = require('../config/connectionDB');

class IndexController {

    viewMovies(req,res){
        let sql = `SELECT * FROM movie`;
        db.query(sql, (err, results)=>{
            if (err) throw err;
            res.status(200).json(results)
        })
    }
    
    viewReleaseOrder(req,res){
        let sql = `SELECT * FROM movie WHERE released ORDER BY release_year`;
        db.query(sql, (err, results)=>{
            if (err) throw err;
            res.status(200).json(results)
        })
    }

    viewChronologyOrder(req,res){
        let sql = `SELECT * FROM movie WHERE released ORDER BY chronology_year`;
        db.query(sql, (err, results)=>{
            if (err) throw err;
            res.status(200).json(results)
        })
    }

    viewSelectedMovie(req,res){
        let sql = `SELECT * FROM movie WHERE movie_id='${movie_id}'`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json(result)
        })
    }

    
    getNextRelease(req,res){
        let sql = `SELECT title, release_date FROM movie WHERE movie_id =
        (SELECT MIN(movie_id) FROM movie WHERE released = false)`;
        db.query(sql, (err, result)=>{
            if(err) throw err;
            res.status(200).json(result[0])
            console.log(result[0])
        })
    }
}

module.exports = new IndexController;