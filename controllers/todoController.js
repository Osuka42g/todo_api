var tasks = []

// // Task model
// var task = {
//     id: integer,
//     task: string,
//     completed: boolean
// }

var Todo = {

    add: function (req, res, next) {
        var task = req.body && req.body.task ? req.body.task : false

        if (task) {
            var e = { id: tasks.length, task: task, completed: false }
            tasks.push(e)
            res.send(e)
            return
        }

        res.sendStatus(400)
    },

    list: function (req, res, next) {
        var filteredTasks = tasks

        if (req.query && req.query.completed) {
            var completed = req.query.completed === "true"
            filteredTasks = tasks.filter(e => e.completed === completed )
        }

        res.send(filteredTasks)
    },

    complete: function (req, res, next) {
        if (!req.body || !req.body.id) {
            res.send(400, {"message": "invalid id"})
            return
        }

        var id = req.body.id
        tasks[id].completed = true
        res.send(tasks[id])
    },

    delete: function () {
        // Todo
    }

}

module.exports = Todo