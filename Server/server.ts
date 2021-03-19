
import express, { Application, NextFunction, Request, Response } from "express";
import webpush from "web-push";

import BodyParser from "body-parser";



const path = require("path");

const app: Application= express();

app.use(BodyParser.json());

app.use(express.static(path.join(__dirname, "build")) );

const publicVapidKey : string = "BI__ik-fD5l0QUr4XNmGqdPhMeFppBORhMRiVYd3tRurCQddSaU3qZQlEPT9NOgZzhxm7hY380dNV1YaXauNeS0";

const privateVapidKey: string  = "vjlfoA9p4M3ewy6GfgyQMsT8Z2qjCESX-cU8s7aYjwE";

webpush.setVapidDetails("mail:gamica@cloud.com" ,publicVapidKey, privateVapidKey );

app.post("/subscribe", (req: Request, res: Response)=>{

    const subscription: any = req.body;

    res.status(201).json({});


    const payload: string = JSON.stringify({title:"hello this is notification title"})
console.log(subscription);

    webpush.sendNotification(subscription, payload).catch(err => console.error(err));


})

const port: number = 6060;

app.listen(port, ()=> console.log(`server started on port${port}`));