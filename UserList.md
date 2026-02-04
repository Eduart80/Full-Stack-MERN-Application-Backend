 "user 1": 
 {
    "email": "tom@test.com",
    "password":"pass123456"
}
USer 2:
{
    "email": "jerry@test.com",
    "password":"asdss123456"
}
Project 1:
{
    "user": "697bbe8e47ae8ec2cd3caedf",
    "name": "Dest 21",
    "description": "Rosaceae",
    "status": "active",
    "startDate": "2026-01-29T06:00:00.000Z",
    "endDate": "2026-02-04T06:00:00.000Z",
    "_id": "697cdf6d48763ab6d94838e4",
}
==================reflection during work=============
As i am creating routes i see the need to return to api documentation for api paths, how i decided to find or create etc.

githubId : i change it from require true to false because since the id is unique mongodb will not let me add into this server another user. so i found a whay out to change req to false

This is not a good aproach if there are many more fields to update.
    const { name, description, status, startDate, endDate } = req.body;
    if(name !== undefined) project.name = name
    if(description !== undefined) project.description = description
    if(status !== undefined) project.status = status
    if(startDate !== undefined) project.startDate = startDate
    if(endDate !== undefined) project.endDate = endDate
Thinking how to find another way to update in simpler way and dinamic

found new aproach to dynamic loop throught the object body
 Object.keys(req.body).forEach(key => {
        if (project[key] !== undefined) {
            project[key] = req.body[key];
        }
    })



