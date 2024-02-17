const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        tutorLastNames: {type: String,max: 100,},
        tutorFirstNames: {type: String,max: 100,},
        tutorCi: {type: String,max: 100,},
        tutorHomeAddress: {type: String,max: 100,},
        tutorHomeState: {type: String,max: 100,},
        tutorHomeMunicipality: {type: String,max: 100,},
        tutorHomeParish: {type: String,max: 100,},
        tutorNumber: {type: String,max: 100,},
        tutorLocalNumber: {type: String,max: 100,},
        tutorEmail: {type: String,max: 100,},
        tutorFb: {type: String,max: 100,},
        tutorX: {type: String,max: 100,},
        tutorYt: {type: String,max: 100,},
        tutorIg: {type: String,max: 100,},
        tutorOtherSM: {type: String,max: 100,},
        teamId:{type: String,max: 100,}
    },
    { timestamps: true }
);

module.exports = mongoose.model("TutorR", UserSchema);