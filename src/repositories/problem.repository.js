const { Problem } = require("../models/index");

class ProblemRepository {
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

}

module.exports = ProblemRepository;