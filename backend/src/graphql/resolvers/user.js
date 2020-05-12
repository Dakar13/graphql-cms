export default {
    Query: {
        getUsers: (parent, args, { models }) => {
            return models.User.findAll({
                include: [{
                    model: models.Post,
                    as: 'posts',
                    include: [{
                        model: models.Tag,
                        as: 'tags'
                    }]
                }]
            })
        }
    },
    Mutation: {
        addUser: (parent, { input }, { models }) => models.User.create({ ...input })
    }
}