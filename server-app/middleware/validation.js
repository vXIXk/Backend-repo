const { TASK_VALIDATION_SCHEMA } = require("./../utils/validationSchemas");

module.exports.validateTask = async (req, res, next) => {
    const { body } = req;
    try {
        const validatedTask = await TASK_VALIDATION_SCHEMA.validate(body);
        req.body = validatedTask;
        next();
    } catch (err) {
        next(err);
    }
};
