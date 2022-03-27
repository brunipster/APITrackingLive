import iService from "@interfaces/service.interface";
import userModel from "@models/user.model";
import UserRepository from "@repositories/user.repository";
import UserService from "@services/user.service";
import BaseController from "./base.controller";

class UserController extends BaseController {
    constructor(UserService: iService) {
        super(UserService, '/user');
    }
}
const repository = UserRepository.getInstance(userModel)
const service = UserService.getInstance(repository)
export default new UserController(service);