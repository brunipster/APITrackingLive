import iService from "@interfaces/service.interface";
import budgetModel from "@models/budget.model";
import BudgetRepository from "@repositories/budget.repository";
import BudgetService from "@services/budget.service";
import BaseController from "./base.controller";

class MovementController extends BaseController {
    constructor(BudgetService: iService) {
        super(BudgetService, '/budget');
    }
}
const repository = BudgetRepository.getInstance(budgetModel)
const service = BudgetService.getInstance(repository)
export default new MovementController(service);