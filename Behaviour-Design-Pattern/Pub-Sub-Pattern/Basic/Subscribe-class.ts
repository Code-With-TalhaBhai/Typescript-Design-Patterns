
export class SubscribeClass<MessageType> {
    private subscribers = new Set<(msg:MessageType)=>void>();

    // Use logic function within function
    Subscribe(bc:(msg:MessageType)=>void){
        this.subscribers.add(bc);
        return ()=>{
            this.subscribers.delete(bc);
        }
    }

    publish(msg:MessageType){
        this.subscribers.forEach(sub=>sub(msg));    
    }
};

