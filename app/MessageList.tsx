"use client";
import { useEffect } from 'react';
import useSWR from 'swr'
import { clientPusher } from '../pusher';
import { Message } from '../typings';
import fetcher from '../utils/fetchMessages';
import MessageComponent from './MessageComponent';

function MessageList() {
    const {data: messages, error, mutate} = useSWR<Message[]>('/api/messages', fetcher)

    useEffect(() => {
        const channel = clientPusher.subscribe('messages');
        channel.bind('new-message', (data: Message) => {
            // If you send the message then no need to update the message list in that user client instead all other client will update
            if(messages?.find((message) => message.id === data.id)) return;

            if(!messages){mutate(fetcher)}
            else {
                mutate(fetcher, {
                    optimisticData: [data, ...messages!], 
                    rollbackOnError: true
                })
            }
        })

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [messages, mutate, clientPusher])
    return (
        <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
            {messages?.map(message => (
                <MessageComponent key={message.id} message={message}/>
            ))}
        </div>
    )
}

export default MessageList
