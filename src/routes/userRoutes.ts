// import { Router } from "express";
// import userAuthUtils from "../../utils/userAuthUtils";
// import { routerResponse } from "../common/responseQuery";
// import getUserService from "../services/getUserService";
// import loginService from "../services/loginService";
// import signupService from "../services/signupService";
// import userProfileService from "../services/userProfileBuilderService";

// export class UserRouter {
//     public router;

//     constructor() {
//         this.router = Router();
//         this.init()

//     }
//     init() {

//         this.router.post("/signup", this.signupWithUser);
//         this.router.post("/login", this.login);
//         this.router.get("/getuser", this.getByUser);
//         this.router.get("/getallusers", userAuthUtils.verifyClientSessionMiddeleware, this.getAllUsers);
//         this.router.put("/updateuser", this.userProfileBuilder);
//         this.router.get("/confirm", this.verifyUser);
//     }

//     public signupWithUser(req: any, res: any) {
//         try {
//             signupService.signupWithUser(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

//     public login(req: any, res: any) {
//         try {
//             loginService.login(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

//     public getByUser(req: any, res: any) {
//         try {
//             getUserService.getByUser(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

//     public userProfileBuilder(req: any, res: any) {
//         try {
//             userProfileService.userProfileBuilder(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

//     public getAllUsers(req: any, res: any) {
//         try {
//             getUserService.getAllUsers(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

//     public verifyUser(req: any, res: any) {
//         try {
//             signupService.verifyUser(req, function (err: Error, response) {
//                 var commonResponse = routerResponse.objResponse(err, response, req, res);
//                 res.send(commonResponse);
//             });
//         } catch (err) {
//             var commonResponse = routerResponse.objResponse(err, null, req, res);
//             res.send(commonResponse);
//         }
//     }

// }
// var userRouter = new UserRouter();
// const router = userRouter.router
// export default router