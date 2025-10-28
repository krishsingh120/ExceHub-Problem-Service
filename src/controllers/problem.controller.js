const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");


function pingController(req, res) {
    return res.json({ message: "ping controller is up" });
}

function addProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('AddProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('AddProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('AddProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('AddProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('AddProblem');
    } catch (error) {
        next(error);
    }
}


module.exports = {
    pingController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}