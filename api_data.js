define({ "api": [
  {
    "type": "get",
    "url": "/app/email-check",
    "title": "Check email address availability",
    "name": "CheckEmailAvailability",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/app/token",
    "title": "Check user information",
    "name": "CheckUserInformation",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/app/user/create",
    "title": "Create new user",
    "name": "GCreateUser",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/users/me",
    "title": "Get Authenticated User",
    "name": "GetAuthUser",
    "description": "<p>Get the authenticated user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/transactions",
    "title": "Get user transactions",
    "name": "GetUserTransactions",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:id/transactions",
    "title": "Get user transactions",
    "name": "GetUserTransactions",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:id/transactions",
    "title": "Get user transactions",
    "name": "GetUserTransactions",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/invite/import",
    "title": "Import Users",
    "name": "ImportUsers",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "users",
            "description": "<p>An excel file containing the information of users to be onboarded.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/invite",
    "title": "Invite User",
    "name": "InviteUser",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the new User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>The first name of the User to be invited.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>The last name of the User to be invited.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "LoginUser",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get all users",
    "name": "LoginUser",
    "description": "<p>Login a user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register User",
    "name": "RegisterUser",
    "description": "<p>Register</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone number of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idType",
            "description": "<p>ID type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idNumber",
            "description": "<p>ID Number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/passwords/reset",
    "title": "Reset Password",
    "name": "ResetPassword",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>The confirm password of the User.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/passwords/forgot",
    "title": "Send Forgot Password Email",
    "name": "SendForgotPasswordEmail",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/verify",
    "title": "Send Verification Email",
    "name": "SendVerificationEmail",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/users/me",
    "title": "Update Authenticated User",
    "name": "UserUpdate",
    "description": "<p>Update the authenticated user.</p>",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/users/verify/:verifyToken",
    "title": "Verify Authenticated User",
    "name": "VerifyUser",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "Users"
  }
] });
