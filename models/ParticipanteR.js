const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        pNames: {type: String,max: 100,},
        pLastNames: {type: String,max: 100,},
        pci: {type: String,max: 100,},
        page: {type: Number,max: 100,},
        pdateBirth: {type: Date,max: 100,},
        pplaceBirth: {type: String,max: 100,},
        pHomeAddress: {type: String,max: 100,},
        pHomeState: {type: String,max: 100,},
        pHomeMunicipality: {type: String,max: 100,},
        pHomeParish: {type: String,max: 100,},
        pPhone: {type: String,max: 100,},
        pLocalPhone: {type: String,max: 100,},
        pSchool: {type: String,max: 100,},
        pGrade: {type: String,max: 100,},
        pSchoolAddress: {type: String,max: 100,},
        pSchoolState: {type: String,max: 100,},
        pSchoolMunicipality: {type: String,max: 100,},
        pSchoolParish: {type: String,max: 100,},
        teamId:{type: String,max: 100,}
    },
    { timestamps: true }
);

module.exports = mongoose.model("ParticipanteR", UserSchema);