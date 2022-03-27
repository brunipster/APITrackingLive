import BaseRepository from '@repositories/base.repository';

class UserRepository extends BaseRepository {
    constructor(Account) {
        super(Account);
    }

    public static getInstance(model) {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository(model);
        }

        return UserRepository.instance;
    }
}

export default UserRepository;