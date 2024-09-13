const yup = require("yup");

module.exports.TASK_VALIDATION_SCHEMA = yup.object({
    body: yup
        .string()
        .trim()
        .min(5, "This text is too short, the threshold's 5 symbols.")
        .max(500, "This text is too long, exceeding 500 symbols."),
});
