import {
    addTest,
    getTests,
    getTestByID,
    updateTest,
    deleteTest
} from '../controllers/testControllers';

const routes = (app) => {
    app.route('/test')
        // get endpoint
        .get(getTests)
        // post endpoint
        .post(addTest)

    app.route('/test/:testID')
        // get specific item
        .get(getTestByID)
        // update specific item
        .put(updateTest)
        // delete item
        .delete(deleteTest)
}

export default routes;