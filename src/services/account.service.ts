import iRepository from "@interfaces/repository.interface";
import BaseServices from "./base.service";

class AccountService extends BaseServices {
    constructor(AccountRepository: iRepository) {
        super(AccountRepository);
    }

    public static getInstance(repository: iRepository) {
        if (!AccountService.instance) {
            AccountService.instance = new AccountService(repository);
        }

        return AccountService.instance;
    }
}

export default AccountService;