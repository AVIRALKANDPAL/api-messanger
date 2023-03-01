exports.validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

exports.checkIfEmailExists = (mail) => {
  return false;
};

exports.generateOTP = (length = 4) => {
  let otp = ''

  for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10)
  }

  return Number.parseInt(otp)
}