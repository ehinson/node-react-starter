import mongoose from 'mongoose';
import { TestSchema } from '../models/testModel';

const Test = mongoose.model('Test', TestSchema);

export const addTest = (req, res) => {
    let newTest = new Test(req.body);

    newTest.save((err, Test) => {
        if (err) {
            res.send(err);
        }

        res.json(Test);
    })
}

export const getTests = (req, res) => {

    Test.find({},(err, Test) => {
        if (err) {
            res.send(err);
        }

        res.json(Test);
    })
}

export const getTestByID = (req, res) => {
    Test.findById(req.params.testID,(err, Test) => {
        if (err) {
            res.send(err);
        }

        res.json(Test);
    })
}

export const updateTest = (req, res) => {
    Test.findOneAndUpdate({ _id: req.params.testID }, req.body, {new: true}, (err, Test) => {
        if (err) {
            res.send(err);
        }

        res.json(Test);
    })
}

export const deleteTest = (req, res) => {
    Test.remove({ _id: req.params.testID }, (err, Test) => {
        if (err) {
            res.send(err);
        }

        res.json({message: "Successfully deleted player"});
    })
}