const auth_handler = (req, res, next) => {
    const {id} = req.session
    // if id in db => next else redirect to login
}