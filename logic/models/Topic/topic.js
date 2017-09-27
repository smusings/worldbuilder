var mongoose = require('mongoose')
var Section = require('./Section/section')

mongoose.connect('DB')

var topicSchema = new topicSchema({
    owner: { type: Section, required: true },
    name : { type: String, required: true },
    body : { type: String, required: true }
})

topicSchema.methods.rename = function(newName) {
    this.name = newName
}

topicSchema.methods.edit = function(newBody) {
    this.body = newBody
}

var Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic;