import {Observable, Subject} from 'rxjs';
import {Message} from './message.model';
import {Thread} from '../thread/thread.model';
import {User} from '../user/user.model';
import {filter, map, publishReplay, refCount, scan} from 'rxjs/operators';

const initialMessages: Message[] = [];

export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();

  constructor() {
    this.messages = this.updates.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, initialMessages),
      publishReplay(1),
      refCount()
    );

    this.create.pipe(
      map((message: Message): IMessagesOperation => {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
    );
  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesFromThreadNotByUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(
      filter((message: Message) => {
        return (message.thread.id === thread.id) && (message.author.id !== user.id);
      })
    );
  }
}

type IMessagesOperation = (messages: Message[]) => Message[];
