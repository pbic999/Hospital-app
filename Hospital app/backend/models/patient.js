import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
    s_no: {
        type: Number,
        unique: true,
        require: true
    },
    ward_name: {
        type: String,
        require: true
    },
    UHID: {
        type: String,
        require: true
    },
    hospital_no: {
        type: Number,
        require: true
    },
    doa: {
        type: String,
        require: true
    },
    patient_name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    pr: {
        type: Number,
        require: true
    },
    bp: {
        type: String,
        require: true
    },
    rr: {
        type: Number,
        require: true
    },
    spo2: {
        type: Number,
        require: true
    },
    o2_niv_mv: {
        type: String,
        require: true
    },
    complaints: {
        type: String,
    },
    duty_doctor: Array,
    duty_nurse: Array
})

const patientModel = mongoose.model('patient',patientSchema)
export default patientModel