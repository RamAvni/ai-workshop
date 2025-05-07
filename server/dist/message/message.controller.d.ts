import { MessageService, CreateMessageDto } from "./message.service";
import { Message } from "src/entities/message.entity";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
}
