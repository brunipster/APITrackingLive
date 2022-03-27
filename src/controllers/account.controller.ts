import iService from "@interfaces/service.interface";
import accountModel from "@models/account.model";
import AccountRepository from "@repositories/account.repository";
import AccountService from "@services/account.service";
import BaseController from "./base.controller";

class AccountController extends BaseController {
    constructor(AccountService: iService) {
        super(AccountService, '/account');
    }
}
const repository = AccountRepository.getInstance(accountModel)
const service = AccountService.getInstance(repository)
export default new AccountController(service);