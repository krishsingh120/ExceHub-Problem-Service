// const { ProblemRepository, ProblemRepository } = require("../repositories/index");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");


class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    // create problem 
    async createProblem(problemData) {
        try {
            // 1. sanitized the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            console.log("Problem service Error", error);
            throw error;
        }
    }

    // get all problem
    async getAllProblem() {
        try {
            const allProblems = await this.problemRepository.getAllProblem();
            return allProblems;
        } catch (error) {
            console.log("Problem service Error", error);
            throw error;
        }
    }
}

module.exports = ProblemService;