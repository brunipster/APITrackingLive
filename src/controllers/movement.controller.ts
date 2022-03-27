import iService from "@interfaces/service.interface";
import movementModel from "@models/movement.model";
import MovementRepository from "@repositories/movement.repository";
import MovementService from "@services/movement.service";
import BaseController from "./base.controller";

class MovementController extends BaseController {
    constructor(MovementService: iService) {
        super(MovementService, '/movement');
    }
}
const repository = MovementRepository.getInstance(movementModel)
const service = MovementService.getInstance(repository)
export default new MovementController(service);