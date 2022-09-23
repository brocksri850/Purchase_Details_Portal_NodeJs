# MyWorkspace

This is a repository contains API for created using TypeScript 3.2,Express,Node js.

## Install

Install the node packages via:

`$ npm install`

And then run the grunt task to compile the TypeScript:

`$ npm run grunt`

## Starting

To start the server run:

`$ npm start`
<!-- 
## Kindly Refer the functionality

1. Registration - FirstName,LastName,UserName (unique), Email (unique), Phone Number
with country code,Password (standard regex validation to be added)

## Signup:

`Method`: `POST Url: http://localhost:7000/user/signup`

## Input:
`body: {
    "first_name": "Sridhar",
    "last_name": "D",
    "user_name": "tamilam",
    "email": "brocksritamil8q@gmail.com",
    "country_code": "+91",
    "phone_number": "6363426322",
    "password": "yaMin34#4",
    "isActivationLinkRequired": true
}`

## Output:
    `{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": [
        {
            "user_id": 42,
            "first_name": "Sridhar",
            "last_name": "D",
            "user_name": "tamilam",
            "email": "brocksritamil8q@gmail.com",
            "country_code": "+91",
            "phone_number": "6369124322",
            "password": "yaMin34#4",
            "isActivationLinkRequired": true,
            "status": "pending",
            "created_at": "2022-09-18T13:58:14.576Z"
        },
        true
    ]
}`

## Login 

`Method`: `POST Url: http://localhost:7000/user/login`

## Input:
`body: {
    "first_name": "Sridhar",
    "last_name": "D",
    "user_name": "tamilam"
    "email": "brocksritamil8q@gmail.com",
    "country_code": "+91",
    "phone_number": "6363426322",
    "password": "yaMin34#4",
    "isActivationLinkRequired": true
}`

## Output:
`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": {
        "user_id": 39,
        "first_name": "Sridhar",
        "last_name": "D",
        "email": "brocksri8@gmail.com",
        "phone_number": "8508880793",
        "user_name": "ravi7889",
        "accessToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyZWRpc0lkIjoiVXNlciNJZF8zOSIsImlhdCI6MTY2MzUxNDQ2MCwiZXhwIjoxNjYzNTE0NTIwfQ.TVu0V1CM1V1pMEzLLoyoAkuc62VF29m1sx4WTBh0FIUhgNtjf4FJ3aMVoAQKNM5fVxJooWzSz0k9q2igOP5pNw",
        "refreshToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyZWRpc0lkIjoiVXNlciNJZF8zOSIsImlhdCI6MTY2MzUxNDQ2MH0.LWauQj052V-k_vUfKlUmmF251FOB6Lj2JqPABS24K2j4OdCv9aVrX8KChmjMRfAtqEGA8qDY6L5IYTen-jwYlA",
        "created_dt": "2022-09-18T15:21:04.710Z",
        "key": "User#Id_39"
    }
}`

## Get by user

`Method: GET Url: http://localhost:7000/user/getuser?user_id=39`
`query: user_id: 39`
    
## Input:


## Output:
`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": {
        "user_id": 18,
        "first_name": "Sridhar",
        "last_name": "D",
        "user_name": "Sridhar527324",
        "email": "brocksri@gmail.com",
        "phone_number": "6369126322",
        "country_code": "+91",
        "EducationQualifications": [
            {
                "education_qualification_id": 1,
                "user_id": 18,
                "passed_out_year": 2021,
                "institution": "Stc",
                "degree": "B.Sc(informatin Technology)",
                "percentage": "78.90"
            },
            {
                "education_qualification_id": 2,
                "user_id": 18,
                "passed_out_year": 2023,
                "institution": "Stc",
                "degree": "M.Sc(informatin Technology)",
                "percentage": "74.90"
            },
            {
                "education_qualification_id": 3,
                "user_id": 18,
                "passed_out_year": 2021,
                "institution": "Stc",
                "degree": "B.Sc(informatin Technology)",
                "percentage": "78.90"
            },
            {
                "education_qualification_id": 4,
                "user_id": 18,
                "passed_out_year": 2023,
                "institution": "Stc",
                "degree": "M.Sc(informatin Technology)",
                "percentage": "74.90"
            },
            {
                "education_qualification_id": 5,
                "user_id": 18,
                "passed_out_year": 2021,
                "institution": "Stc",
                "degree": "B.Sc(informatin Technology)",
                "percentage": "78.90"
            },
            {
                "education_qualification_id": 6,
                "user_id": 18,
                "passed_out_year": 2023,
                "institution": "Stc",
                "degree": "M.Sc(informatin Technology)",
                "percentage": "74.90"
            }
        ],
        "WorkExperiences": [
            {
                "work_experience_id": 8,
                "user_id": 18,
                "company": "Inter Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
            {
                "work_experience_id": 7,
                "user_id": 18,
                "company": "Adloggs Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
            {
                "work_experience_id": 6,
                "user_id": 18,
                "company": "Inter Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
            {
                "work_experience_id": 5,
                "user_id": 18,
                "company": "Adloggs Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
            {
                "work_experience_id": 4,
                "user_id": 18,
                "company": "Inter Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
            {
                "work_experience_id": 3,
                "user_id": 18,
                "company": "Adloggs Technology",
                "start_date": "2021-10-01T00:11:00.000Z",
                "end_date": "2022-10-01T08:11:00.000Z",
                "resume_upload": null
            },
        ]
    }
}`

## Get all user

*** Profile Listing with pagination required, search (based on basic info), totalCount, filteredCount ***

`Method: GET Url: http://localhost:7000/user/getallusers?pageNumber=3&search=brock`

## Input: 

## Output

`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": [
        {
            "user_id": 1,
            "first_name": "sridhar",
            "last_name": "D",
            "user_name": "sridhar",
            "email": "brocksri8122@gmail.com",
            "phone_number": "6369122322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
        {
            "user_id": 2,
            "first_name": "sridhar",
            "last_name": "D",
            "user_name": "sridhar1",
            "email": "brocksri81@gmail.com",
            "phone_number": "6369122322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
        {
            "user_id": 13,
            "first_name": "Sridhar",
            "last_name": "D",
            "user_name": "Sridhar52324",
            "email": "brocksri28@gmail.com",
            "phone_number": "6369126322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
        {
            "user_id": 18,
            "first_name": "Mohan",
            "last_name": "S",
            "user_name": "Sridhar527324",
            "email": "brosssscksri@gmail.com",
            "phone_number": "9740934566",
            "country_code": "+91",
            "EducationQualifications": [
                {
                    "education_qualification_id": 10,
                    "user_id": 18,
                    "passed_out_year": 2023,
                    "institution": "Stc",
                    "degree": "M.Sc(informatin Technology)",
                    "percentage": "74.90"
                },
                {
                    "education_qualification_id": 9,
                    "user_id": 18,
                    "passed_out_year": 2021,
                    "institution": "Stc",
                    "degree": "B.Sc(informatin Technology)",
                    "percentage": "78.90"
                },
                {
                    "education_qualification_id": 8,
                    "user_id": 18,
                    "passed_out_year": 2023,
                    "institution": "Stc",
                    "degree": "M.Sc(informatin Technology)",
                    "percentage": "74.90"
                },
                {
                    "education_qualification_id": 7,
                    "user_id": 18,
                    "passed_out_year": 2021,
                    "institution": "Stc",
                    "degree": "B.Sc(informatin Technology)",
                    "percentage": "78.90"
                },
                {
                    "education_qualification_id": 6,
                    "user_id": 18,
                    "passed_out_year": 2023,
                    "institution": "Stc",
                    "degree": "M.Sc(informatin Technology)",
                    "percentage": "74.90"
                },
                {
                    "education_qualification_id": 5,
                    "user_id": 18,
                    "passed_out_year": 2021,
                    "institution": "Stc",
                    "degree": "B.Sc(informatin Technology)",
                    "percentage": "78.90"
                },
            ],
            "WorkExperiences": [
                {
                    "work_experience_id": 12,
                    "user_id": 18,
                    "company": "Inter Technology",
                    "start_date": "2021-10-01T00:11:00.000Z",
                    "end_date": "2022-10-01T08:11:00.000Z",
                    "resume_upload": null
                },
                {
                    "work_experience_id": 11,
                    "user_id": 18,
                    "company": "Adloggs Technology",
                    "start_date": "2021-10-01T00:11:00.000Z",
                    "end_date": "2022-10-01T08:11:00.000Z",
                    "resume_upload": null
                },
                {
                    "work_experience_id": 10,
                    "user_id": 18,
                    "company": "Inter Technology",
                    "start_date": "2021-10-01T00:11:00.000Z",
                    "end_date": "2022-10-01T08:11:00.000Z",
                    "resume_upload": null
                },
            ]
        },
        {
            "user_id": 21,
            "first_name": "Sridhar",
            "last_name": "D",
            "user_name": "Sridhar5247324",
            "email": "brockssri@gmail.com",
            "phone_number": "6369126322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
        {
            "user_id": 22,
            "first_name": "Sridhar",
            "last_name": "D",
            "user_name": "Sridhar52437324",
            "email": "brocsaawkssri@gmail.com",
            "phone_number": "6369126322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
        {
            "user_id": 26,
            "first_name": "Sridhar",
            "last_name": "D",
            "user_name": "ravi788944",
            "email": "brock45sri@gmail.com",
            "phone_number": "6369126322",
            "country_code": "+91",
            "EducationQualifications": [],
            "WorkExperiences": []
        },
    ],
    "pagination": {
        "totalRows": 20,
        "rowSize": 8,
        "currentPage": 1,
        "currentPageFirstSlNo": 1,
        "currentPageLastSlNo": 8
    }
}`

## Update Profile Builder

*** Write CRUD APIs for building User Profile Builder ***

## CRUD APIs for building User Profile Builder

`Method: PUT Url: http://localhost:7000/user/updateuser`
`query: user_id: 39`

## Input: 
`body:
{
    "user_id": 39,
    "first_name": "Sridhar",
    "last_name": "D",
    "phone_number": "8508880793",
    "current_address": "Coimbatore",
    "native_address": "chennai",
    "education_qualification": [
        {
            "passed_out_year": "2021",
            "institution": "Stc",
            "degree": "B.Sc(informatin Technology)",
            "percentage": 78.90
        },
        {
            "passed_out_year": "2023",
            "institution": "Stc",
            "degree": "M.Sc(informatin Technology)",
            "percentage": 74.90
        }
    ],
    "work_experience": [
        {
            "company": "Adloggs Technology",
            "start_date": "2021-10-01 05:41:00",
            "end_date": "2022-10-01 13:41:00"
        },
        {
            "company": "Inter Technology",
            "start_date": "2021-10-01 05:41:00",
            "end_date": "2022-10-01 13:41:00"
        }
    ]
}`

## Output:
`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": "Data updated"
}`

## Verify User

`Method: get Url: http://localhost:7000/user/confirm?code=U2FsdGVkX1%2BcNG5RUxQjqpJX2op%2B%2FK3yhqom49qJjnTiIpn9YPnJH%2BJm9vd99sEDiC98fSxm9MuKl4DEfA5Nmr9MpZihRbQ1pR2KlHQCc1gcJSyZEIDfKywkI83XAqd0`

## Input: 

## Output:
`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": {
        "message": "Accepted"
    }
}`

## Output:
`{
    "status": true,
    "code": 200,
    "message": "Success",
    "data": {
        "message": "Already accepted the mail"
    }
}` -->