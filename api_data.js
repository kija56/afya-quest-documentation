define({ "api": [
  {
    "type": "get",
    "url": "/app/email-check",
    "title": "Check email address availability",
    "name": "CheckEmailAvailability",
    "description": "<p>Login a user.</p>",
    "group": "AppUsers",
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
    "groupTitle": "AppUsers"
  },
  {
    "type": "post",
    "url": "/app/token",
    "title": "Check user information",
    "name": "CheckUserInformation",
    "description": "<p>Checks user if available in the system.</p>",
    "group": "AppUsers",
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
    "groupTitle": "AppUsers"
  },
  {
    "type": "get",
    "url": "/app/user/create",
    "title": "Create new user",
    "name": "CreateUser",
    "description": "<p>Register new user through social networks</p>",
    "group": "AppUsers",
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
    "groupTitle": "AppUsers"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "LoginUser",
    "description": "<p>Login a user.</p>",
    "group": "CMSUsers",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                 { userType: 'afyaQuestUser',\ndeleteReason: '',\nchangePassword: false,\ndeleted: false,\ndisabled: false,\n_id: 5f4f526f9127bf17c06c3c93,\nfirstName: 'Root',\nlastName: 'Admin',\nuserName: 'root@afyaquest.co.tz',\ntype: 4,\nrole: 5f4e63cff4e8050004995471,\nemail: 'root@afyaquest.co.tz',\nprivateName: 'Root Admin',\npassword: '$2b$10$LJyLiQposmfaLah4Y5h/2u1hR/ANwbl1zd1IKtFrNgcCME7isk2qm' }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register User",
    "name": "RegisterUser",
    "description": "<p>Register</p>",
    "group": "CMSUsers",
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
    "groupTitle": "CMSUsers"
  }
] });
