import { Message } from "src/entities/message.entity";
import { Repository } from "typeorm";
export declare class CreateMessageDto {
    text: string;
    isSent: boolean;
}
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
}
