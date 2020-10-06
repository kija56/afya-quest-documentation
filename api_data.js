define({ "api": [
  {
    "type": "patch",
    "url": "/accessControl/roles/:id/approve",
    "title": "Approve Role",
    "name": "ApproveRole",
    "description": "<p>Approve User Role</p>",
    "group": "Access_Control",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "added[]",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "post",
    "url": "/accessControl/roles",
    "title": "Create New Role",
    "name": "CreateRole",
    "description": "<p>Create New Role</p>",
    "group": "Access_Control",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions",
            "description": "<p>Permissions of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "approvalStatus",
            "description": "<p>Approve Status of the Role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    {\n\"approvalStatus\": 0,\n\"_id\": \"5f60c964bbbc7b2db4ea549b\",\n\"name\": \"Administrator\",\n\"description\": \"Controls all system activities\",\n\"createdAt\": \"2020-09-15T14:02:12.035Z\",\n\"updatedAt\": \"2020-09-15T14:02:12.035Z\",\n\"__v\": 0\n    },",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/accessControl/permissions",
    "title": "Fetch All Permissions",
    "name": "Get_All_Permissions",
    "description": "<p>Get all Permissions</p>",
    "group": "Access_Control",
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
      "examples": [
        {
          "title": "Request-Response:",
          "content": "   [\n    {\n        \"_id\": \"5f607b1d5b853905d0883d27\",\n        \"moduleName\": \"access-control\",\n        \"displayName\": \"Can create,update and delete role\",\n        \"genericName\": \"write-roles\",\n        \"createdAt\": \"2020-09-15T08:28:13.963Z\",\n        \"updatedAt\": \"2020-09-15T08:28:13.963Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f607b1d5b853905d0883d28\",\n        \"moduleName\": \"staff\",\n        \"displayName\": \"Can create,update and delete staff \",\n        \"genericName\": \"write-staff\",\n        \"createdAt\": \"2020-09-15T08:28:13.990Z\",\n        \"updatedAt\": \"2020-09-15T08:28:13.990Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f607b1e5b853905d0883d2d\",\n        \"moduleName\": \"access-control\",\n        \"displayName\": \"Can approve role\",\n        \"genericName\": \"approve-roles\",\n        \"createdAt\": \"2020-09-15T08:28:14.096Z\",\n        \"updatedAt\": \"2020-09-15T08:28:14.096Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/accessControl/roles",
    "title": "Fetch All Roles",
    "name": "Get_All_Roles",
    "description": "<p>Get All Role</p>",
    "group": "Access_Control",
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
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    [\n    {\n        \"_id\": \"5f607b1e5b853905d0883d2f\",\n        \"approvalStatus\": 1,\n        \"name\": \"appUser\",\n        \"description\": \"Normal user\",\n        \"createdAt\": \"2020-09-15T08:28:14.431Z\",\n        \"updatedAt\": \"2020-09-15T08:28:14.431Z\",\n        \"__v\": 0,\n        \"rolePermissions\": {\n            \"permissions\": []\n        }\n    },\n    {\n        \"_id\": \"5f60c964bbbc7b2db4ea549b\",\n        \"approvalStatus\": 0,\n        \"name\": \"Administrator\",\n        \"description\": \"Controls all system activities\",\n        \"createdAt\": \"2020-09-15T14:02:12.035Z\",\n        \"updatedAt\": \"2020-09-15T14:02:12.035Z\",\n        \"__v\": 0,\n        \"rolePermissions\": {\n            \"permissions\": []\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "patch",
    "url": "/accessControl/grantPermission",
    "title": "Assign or Unassign Permissions to a Role",
    "name": "GrantPermission",
    "description": "<p>Grant Permissions to a Role</p>",
    "group": "Access_Control",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "added[]",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "patch",
    "url": "/accessControl/roles/:id",
    "title": "Update Role",
    "name": "UpdateRole",
    "description": "<p>Update Role</p>",
    "group": "Access_Control",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>New Name of the Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
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
  },
  {
    "type": "post",
    "url": "/hcp-groups/groups",
    "title": "Create New health Care Provider Group",
    "name": "CreateHCPGroup",
    "description": "<p>Create New health Care Provider Group</p>",
    "group": "HCP_Groups",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP name/title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "patch",
    "url": "/hcp-groups/groups",
    "title": "Update Health Care Provider Group",
    "name": "CreateHCPGroup",
    "description": "<p>Update Health Care Provider Group</p>",
    "group": "HCP_Groups",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP Group Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "delete",
    "url": "/hcp-groups/groups/:groupId",
    "title": "Delete Health Care Provider Group",
    "name": "Delete",
    "description": "<p>Delete Health Care Provider Group</p>",
    "group": "HCP_Groups",
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
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"Removed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "get",
    "url": "/hcp-groups/groups",
    "title": "Fetch All Health Care Provider Groups",
    "name": "GetHCPGroups",
    "description": "<p>Fetch All Health Care Provider Groups</p>",
    "group": "HCP_Groups",
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
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}\n     {\n    \"_id\": \"5f7c6b46337b17397c44ec1c\",\n    \"name\": \"General Medical Practitioner\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "get",
    "url": "/hcp-groups/groups/:groupId",
    "title": "Get HCP Group By ID",
    "name": "Get_HCP_Group_By_ID",
    "description": "<p>Get HCP Group By ID</p>",
    "group": "HCP_Groups",
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
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  }
] });
