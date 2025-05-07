import { Message } from "src/entities/message.entity";
import { Repository } from "typeorm";
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
}
