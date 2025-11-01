const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models/index");

class ProblemRepository {
    // create problem
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                difficulty: problemData.difficulty,
                editorial: problemData.editorial
            })
            return problem;
        } catch (error) {
            console.log("Problem repository Error", error);
            throw error;
        }
    }

    // get all problems
    async getAllProblem() {
        try {
            const allProblems = await Problem.find({}); // {} -> this is for filtration
            return allProblems;
        } catch (error) {
            console.log("Problem repository Error", error);
            throw error;
        }
    }

    // get problem
    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            console.log(problem);
            
            if (!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log("Problem repository Error", error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;