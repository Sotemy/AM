const error_handler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    console.log(statusCode, err.message)
    res.status(statusCode)
    return res.json({
        message:err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
  
}

module.exports = {error_handler}