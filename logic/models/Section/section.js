var mongoose = require('mongoose')
var World = require('./World/world')

mongoose.connect('DB')

var sectionSchema = new sectionSchema({
    world: { type: World, required: true},
    name : { type: String, required: true },
    owner: sectionSchema,
})

sectionSchema.methods.rename = function(newName) {
    this.name = newName
}

var Section = mongoose.model('Section', sectionSchema)

module.exports = Section;