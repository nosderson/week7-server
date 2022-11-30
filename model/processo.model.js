import { Schema, model } from 'mongoose'

const processSchema = new Schema({
  documentName: {
    type: String,
    required: true,
    minLength: 3,
    trim: true
  },
  status: {
    type: String,
    required: true,
    trim: true  
  },
  details: {
    type: String,
    trim: true
  },
  dateInit: {
    type: Date
  },
  dateEnd: {
    type: Date
  },
  comments: [{
    type: String,
    trim: true
  }],
  dateEnd: {
    type: Date
  },
  setor: {
    type: String,
    trim: true
  }
},
  {
    timestamps: true
  })

const ProcessModel = model('Process', processSchema)

export default ProcessModel