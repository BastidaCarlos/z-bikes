const validateBiciCode = (req, res, next) => {
    const secretCode = req.headers["x-bici-code"] || req.body.secretCode;

    if (!secretCode || secretCode !== process.env.BICI_SECRET_CODE) {
        return res.status(401).json({
            error: "Acceso no autorizado. Código inválido o faltante"
        })
    }

    next();
}

export default validateBiciCode;