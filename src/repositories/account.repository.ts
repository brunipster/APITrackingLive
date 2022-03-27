import BaseRepository from '@repositories/base.repository';

class AccountRepository extends BaseRepository {
    constructor(Account) {
        super(Account);
    }

    public static getInstance(model) {
        if (!AccountRepository.instance) {
            AccountRepository.instance = new AccountRepository(model);
        }

        return AccountRepository.instance;
    }
}

export default AccountRepository;