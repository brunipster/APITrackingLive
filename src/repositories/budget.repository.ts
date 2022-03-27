import BaseRepository from '@repositories/base.repository';

class BudgetRepository extends BaseRepository {
    constructor(Budget) {
        super(Budget);
    }

    public static getInstance(model) {
        if (!BudgetRepository.instance) {
            BudgetRepository.instance = new BudgetRepository(model);
        }

        return BudgetRepository.instance;
    }
}

export default BudgetRepository;