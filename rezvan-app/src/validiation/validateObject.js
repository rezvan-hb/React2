
const validateObject = {
    firstname : {
      presence: true,
      // presence: {
      //   message: '^Please enter your first name.'
      // },
      length: {
        minimum: 3,
        message: '^Your name must be at least 3 characters.'
      }
    },
    lastname : {
      // presence: {
      //   message: '^Please enter your last name.'
      // },
      presence: true,
      length: {
        minimum: 3,
        message: '^Your last name must be at least 3 characters.'
      }
    },
    email: {
      presence: true,
      // presence: {
      //   message: '^Please enter your email.'
      // },
      email: {
        message: '^is not a valid email.'
      }
    },
    password : {
      // presence: true,
      presence: { 
        message: '^Please enter a password.'
      },
      length: {
        minimum: 6,
        message: '^Your password must be at least 6 characters.'
      }
    },
    confirmPassword: {
      equality: "password"
    }
  }
  
  export default validateObject
  