var express = require('express');
var router = express.Router();              // get an instance of the express Router
//var Exercise = require('../models/exercise');

router.route('/')
    .post(function (request, response) {
        console.log(request.body);
//        var exercise = new Exercise.Model();
//        exercise.name = request.body.name;
//        exercise.description = request.body.description;
//        exercise.objectives = request.body.objectives;
//        exercise.authorName = request.body.authorName;
//        exercise.authorSteps = request.body.authorSteps;
//        exercise.location = request.body.location;
//        exercise.frequency = request.body.frequency;
//        exercise.duration = request.body.duration;
//        exercise.multimediaURL = request.body.multimediaURL;
//        exercise.save(function (error) {
//            if (error) response.send(error);
//            response.json({exercise: exercise});
//        });
    })
    .get(function (request, response) {
//        Exercise.Model.find(function (error, exercise) {
//            if (error) response.send(error);
//            response.json({exercise: exercise});
//        });
    });

router.route('/:exercise_id')
    .get(function (request, response) {
        Exercise.Model.findById(request.params.exercise_id, function (error, exercise) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({exercise: exercise});
            }
        });
    })
    .put(function (request, response) {
//        Exercise.Model.findById(request.params.exercise_id, function (error, exercise) {
//            if (error) {
//                response.send({error: error});
//            }
//            else {
//                exercise.name = request.body.name;
//                exercise.description = request.body.description;
//                exercise.objectives = request.body.objectives;
//                exercise.authorName = request.body.authorName;
//                exercise.authorSteps = request.body.authorSteps;
//                exercise.location = request.body.location;
//                exercise.frequency = request.body.frequency;
//                exercise.duration = request.body.duration;
//                exercise.multimediaURL = request.body.multimediaURL;
//                exercise.save(function (error) {
//                    if (error) {
//                        response.send({error: error});
//                    }
//                    else {
//                        response.json({exercise: exercise});
//                    }
//                });
//            }
//        });
    })
    .delete(function (request, response) {
//        Exercise.Model.findByIdAndRemove(request.params.exercise_id,
//            function (error, deleted) {
//                if (!error) {
//                    response.json({exercise: deleted});
//                }
//            }
//        );
    });

module.exports = router;
