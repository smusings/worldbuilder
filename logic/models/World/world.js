var mongoose = require('mongoose')

mongoose.connect('DB')

var worldSchema = new worldSchema({
    name : { type: String, required: true }
})

worldSchema.methods.rename = function(newName) {
    this.name = newName
}

var World = mongoose.model('World', worldSchema)

module.exports = World;