function toResource(doc){
        return {
            id: doc.id,
            name: doc.name,
            date: doc.date
        }
}

function normalizeName(name){
        return name.trim()
}


module.exports = {toResource, normalizeName, registerRoutes: (app, db) => { 
    require('./create')(app, db)
    require('./read')(app, db)
    require('./readOne')(app, db)
    require('./delete')(app, db)
    require('./update')(app, db)
}}