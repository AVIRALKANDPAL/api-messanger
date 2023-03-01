const constants = require('../core/constants/constant');

exports.httpResponse = ({ response, statusCode, status, message, data })=>{
    return response.status(statusCode).json({ status: status, message: message, data: data });
}

exports.okHttpResponse = ({ response, message, data})=>{
    return response.status(constants.statusCode.ok).json({ status: constants.response_status.success, message: message, data: data });
}

exports.okHttpResponseFailure = ({ response, message, data})=>{
    return response.status(constants.statusCode.ok).json({ status: constants.response_status.failure, message: message, data: data });
}

exports.badHttpResponse = ({ response, message})=>{
    return response.status(constants.statusCode.bad_request).json({ status: constants.response_status.success, message: message});
}

exports.serverHttpResponse = ({ response, message,})=>{
    return response.status(constants.statusCode.internal_server_error).json({ status: constants.response_status.success, message: message});
}