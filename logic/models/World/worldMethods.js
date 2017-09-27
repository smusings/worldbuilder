var World = require('world')

module.exports = {
    getWorld: () => {
        World.find({}, (err, worlds)=>{
            if(err) throw err;

            return worlds
        })
    },
    newWorld: (worldName) => {
        var world = World({ name: worldName});

        world.save( (err) => {
            if (err) throw err;

            console.log('World Created')
        })
    }
}