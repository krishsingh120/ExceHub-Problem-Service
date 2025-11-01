const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services/index");
const { ProblemRepository } = require("../repositories/index");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());


function pingController(req, res) {
    return res.json({ message: "ping controller is up" });
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully create a new problem",
            error: {},
            data: newProblem,
        })
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