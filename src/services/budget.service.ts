import iRepository from "@interfaces/repository.interface";
import BaseServices from "./base.service";

class BudgetService extends BaseServices {
    constructor(BudgetRepository: iRepository) {
        super(BudgetRepository);
    }

    public static getInstance(repository: iRepository) {
        if (!BudgetService.instance) {
            BudgetService.instance = new BudgetService(repository);
        }

        return BudgetService.instance;
    }
}

export default BudgetService;