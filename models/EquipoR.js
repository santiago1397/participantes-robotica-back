const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        teamName: {type: String,max: 100,},
        projectTitle: {type: String,max: 100,},
        projectObjective: {type: String,max: 100,},
        projectProblem: {type: Number,max: 100,},
        projectProblemSolving: {type: String,max: 100,},
        projectImportance: {type: String,max: 100,},
        projectMaterials: {type: String,max: 100,},
        projectElectronics: {type: String,max: 100,},
        projectSoftware: {type: String,max: 100,},
        projectPhasesDevelop: {type: String,max: 100,},
        projectInterestArea: {type: String,max: 100,},
        projectConceptDesign: {type: String,max: 100,},
        projectConceptDesignDetails: {type: String,max: 100,},
        projectElements: {type: String,max: 100,},
        projectElementsDetails: {type: String,max: 100,},
    },
    { timestamps: true }
);

module.exports = mongoose.model("EquipoR", UserSchema);