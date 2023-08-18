

export function SubscribeFunction<MessageType>(){
    const subscribers = new Set<(msg:MessageType)=>void>();

    return {
        Subscribe(bc:(msg:MessageType)=>void){
            subscribers.add(bc);
            return ()=>{
                subscribers.delete(bc);
            }
        },
    
        publish(msg:MessageType){
            subscribers.forEach(sub=>sub(msg));    
        }
    }

}