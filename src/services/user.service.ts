import iRepository from "@interfaces/repository.interface";
import BaseServices from "./base.service";

class UserService extends BaseServices {
    constructor(UserRepository: iRepository) {
        super(UserRepository);
    }

    public static getInstance(repository: iRepository) {
        if (!UserService.instance) {
            UserService.instance = new UserService(repository);
        }

        return UserService.instance;
    }
}

export default UserService;