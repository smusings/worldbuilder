var Topic = require('topic')

module.exports = {
    getTopics: (topicOwner) => {
        Topic.find({owner: topicOwner}, (err, topics) => {
            if (error) throw err;

            return topics
        })
    },
    newTopic: (owner, name, body) => {
        var topic = Topic({owner: owner, name: name, body: body })

        topic.save( (err) => {
            if(err) throw err;

            console.log("Topic saved")
        })
    },
    editTopic: (topic, name, body) => {
        if (name !== null) {
            topic.rename(name)
        }

        if (body !== null) {
            topic.edit(body)
        }
    }
}