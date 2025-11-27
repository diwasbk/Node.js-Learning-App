const schemaValidateMiddleware = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        res.status(400).send({
            message: err.issues[0].message,
            success: false
        })
    }
}

export default schemaValidateMiddleware