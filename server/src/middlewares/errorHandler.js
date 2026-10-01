const errorHandler = (err, req, res, next) => {
    const existsCode = (err.statusCode || err.status) || 500;
    const message = err.message ? err.message : 'Internal Server Error';

    res.status(existsCode).json({
        status: 'error',
        statusCode: existsCode,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    })
}

export default errorHandler;