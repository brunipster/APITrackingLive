import iRepository from "@interfaces/repository.interface";
import BaseServices from "./base.service";

class MovementService extends BaseServices {
    constructor(AccountRepository: iRepository) {
        super(AccountRepository);
    }

    public static getInstance(repository: iRepository) {
        if (!MovementService.instance) {
            MovementService.instance = new MovementService(repository);
        }

        return MovementService.instance;
    }
}

export default MovementService;