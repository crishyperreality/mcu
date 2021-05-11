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
}

module.exports = new IndexController;