import BaseRepository from '@repositories/base.repository';

class MovementRepository extends BaseRepository {
    constructor(Movement) {
        super(Movement);
    }

    public static getInstance(model) {
        if (!MovementRepository.instance) {
            MovementRepository.instance = new MovementRepository(model);
        }

        return MovementRepository.instance;
    }
}

export default MovementRepository;